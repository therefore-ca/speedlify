# Creating a new Project for Auditing

## Requirements
* Requires Node 12+
* Each file in `_data/sites/*.js` is a category and contains a list of sites for comparison.

## Step 1: Creating a Project Branch
1. Clone this repo `git clone git@github.com:therefore-ca/speedlify.git`
2. Create a new project specific branch based off of the `base` branch.
3. Add a client logo under the `/img/` folder
4. Edit the details in the `_data/sites/production.js` file:
* Add the projects domain name
* Enter the logo file name (just the file name, exclude the /img path)
* Change the bg/text colours related to the clients brand, which will display as the header on the results page
* Add the list of URLs to array for any pages to perform tracking against. Note this can be added to over time as needed
* Determine if tests would need to be ran sooner than the default (24h) retest `frequency`. Test performed sooner than this time will just bypass
 
## Step 2: Run locally & test

Once you've finished setting up the project specific branch and configuration, you can now run some tests to validate it's working well.

```
npm install
npm run test-pages
npm run start
```

* Install packages
* `test-pages` runs the performance & accessibility tests
* `start` serves the website for viewing saved performance data

Re-run the `test-pages` a 1-2 times after, which will force run the test (and ignores the `frequency` setting) to validate it's tracking historical results aok.

After running the tests, you're now ready to see about putting it online to start tracking and sharing results.

### Commit your project branch and push.

## Step 3: Deploy to Netlify

With your branch pushed to the repo, you will be able to do a relative 1-click install to deploy this project build on Netlify.

1. Login to https://app.netlify.com/ with our jamstack account.
2. After logging in, click this link <a href="https://app.netlify.com/start/deploy?repository=https://github.com/therefore-ca/speedlify"><img src="https://www.netlify.com/img/deploy/button.svg" width="146" height="32"></a> to deploy the repo on netlify, selecting the project branch as the production branch.
3. Accept the other default options, and the site should start building running the first round of tests!
4. Ensure to visit `Settings > Domain Settings`. You will see the random Netlify app ID that was generated for the site. Click on `Options > Edit Site Name' to revise:
* Use a name of `[jira project code, lower case]-site-audit` i.e. `prj-site-audit`  

### Success
After the build is finished, you should be able to view the results and share the link as needed!

<hr/>

Based on Speedlify created by [@zachleat](https://www.zachleat.com/).
