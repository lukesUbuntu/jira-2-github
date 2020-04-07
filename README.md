**Note**  This was a quick throw together works for me fine :) export your jira issues as xml and this will import into github issues. Requires [Token](https://github.com/settings/tokens/new) (requires repo access)

**Exporting Jira issues**  
Go to jira `issues & filters -> search`, filter out the issues that u want to import into your github project, then export/save as a `xml` file...   

![screenshot](https://raw.githubusercontent.com/lukesUbuntu/jira-2-github/master/export_screenshot.png)




**Importing Jira issues**  
`git clone git@github.com:lukesUbuntu/jira-2-github.git`  

`cd jira-2-github`   

`npm i`  

`npm run build`   

`cd dist`   
 
edit config.json and update with required details

```
{
    "githubToken": "YOUR_GITHUB_OAUTH_TOKEN",      // https://github.com/settings/tokens/new (requires repo access)   
    "githubUsername": "YOUR_GITHUB_USERNAME",      // github username
    "githubRepo": "YOUR_GITHUB_REPO",              // repo you want to import issues to
    "jiraXmlFile": "FULL PATH TO XML FILE",        // the xml file you exported the issues to
    "dryRun": false                                // test run first to see imported issues
}
```

`node app.js`    

you will get a console.log of what would be imported, if happy edit config change dryRun to false and then `node app.js` 

*Will improve this project + readme another day.*
