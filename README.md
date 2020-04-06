**Note**  Currently for my own importing/exporting may work for others, this was a quick throw together project.   

**Exporting Jira issues**  
Go to jira `issues & filters`, filter our your issues that u want to import into your github project & export as a `xml` file... 

**Importing Jira issues**  
clone this repo   
`cd jira-2-github`   
`npm run build`   
 
edit dist/config.json   

```
{
    "githubToken": "YOUR_GITHUB_OAUTH_TOKEN",      // token here https://github.com/settings/tokens/new (requires repo access)   
    "githubUsername": "YOUR_GITHUB_USERNAME",      // github username
    "githubRepo": "YOUR_GITHUB_REPO",              // repo you want to import issues to
    "jiraXmlFile": "FULL PATH TO XML FILE",        // the xml file you exported the issues to
    "dryRun": false                                // test run first to see imported issues
}
```

run
`cd jira-2-github`   
`node app.js`    

you will get a console.log of what would be imported, if happy edit config and make dryRun : true   

*Will improve this project + readme another day.*