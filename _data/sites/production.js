module.exports = {
    name: "rockymountaineer.com", // optional, falls back to object key
    description: "Production Site",
    logo: 'logo.png',
    bgColor: '#0e2e50',
    textColor: '#ffffff',
    options: {
        frequency: 60 * 23, // 24 hours
        // if the sites don’t share assets on the same domain, we can reset
        // chrome with each run instead of each site in every run (it’s faster)
        // freshChrome: "run",
        freshChrome: "site",
    },
    urls: [
        "https://www.rockymountaineer.com/",
        "https://www.rockymountaineer.com/package-search",
        "https://www.rockymountaineer.com/routes_destinations",
        "https://www.rockymountaineer.com/train-routes/first-passage-west",
        "https://www.rockymountaineer.com/onboard-experience",
        "https://www.rockymountaineer.com/goldleaf",
        "https://www.rockymountaineer.com/find-package",
        "https://www.rockymountaineer.com/train-routes/first-passage-west-classic",
    ],
};
