import * as convert from 'xml-js';
import * as fs from 'fs';
import GitHub from 'github-api';
import { GithubIssue, CreateGithubIssue } from './interfaces/GithubIssue';
import { JiraExport, Item } from './interfaces/jiraexport';
import * as config from './config.json';
import { Config } from './interfaces/config';

const appConfig : Config = config;

function jiraIssues(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(appConfig.jiraXmlFile, (error, xml) => {
      if (error) {
        reject(error);
        return;
      }
      const exports = JSON.parse(
        convert.xml2json(xml.toString(), { compact: true, spaces: 4 })
      ) as JiraExport;

      resolve(exports.rss.channel.item);
    });
  });
}

jiraIssues().then((jiraIssues) => {
  const github = new GitHub({
    token: appConfig.githubToken,
  });

  const _issues = github.getIssues(appConfig.githubUsername, appConfig.githubRepo);

  _issues.listIssues({}, (a, issueResponse) => {
    const issues = issueResponse as GithubIssue[];
    const issueTitles: string[] = [];
    issues.forEach((issue) => {
      if (issueTitles.indexOf(issue.title.toLowerCase()) === -1)
        issueTitles.push(issue.title.toLowerCase());
    });
    // if issue doesn't exist lets create it
    
    jiraIssues.forEach((jiraIssue) => {
      if (issueTitles.indexOf(jiraIssue.title._text.toLowerCase()) === -1) {
        const newIssue: CreateGithubIssue = {
          title: jiraIssue.title._text,
          body: `${jiraIssue.summary._text} link ${jiraIssue.link._text}`,
        };
        if (appConfig.dryRun) {
          console.log(`Adding issue : ${newIssue.title}`);
        } else {
          _issues.createIssue(newIssue, (a, createIssueResponse) => {
            console.log('issueResponse', issueResponse);
          });
        }
      }
    });
    console.log('Completed');
  });
});
