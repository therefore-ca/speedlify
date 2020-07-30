module.exports = {
    // The projects domain name
    name: "domainname.com",
    // Label for which site type this is for, i.e. "Production", "Staging", "Campaign Site" etc...
    description: "Production Site",
    // Image file that lives in /img.
    // I.e. if you add `/img/logo.png', this field should be 'logo.png'.
    logo: '',
    // Header bg color
    bgColor: '#0e2e50',
    // Header text color
    textColor: '#ffffff',
    urls: [
        // Add desired URLs to target & test
    ],
    // Some config settings for running tests
    options: {
        // This setting will prevent querying a site if you attempt to run it again under the specified time window.
        // So while the build will still run, it checks this timestamp against the last run to decide if it should
        // actually run the tests, or skip for now.
        frequency: 60 * 23, // 24 hours
        // if the sites don’t share assets on the same domain, we can reset
        // chrome with each run instead of each site in every run (it’s faster)
        // freshChrome: "run",
        freshChrome: "site",
    },
};
