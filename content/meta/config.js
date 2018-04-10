const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog built on GatsbyJS", // <title>
  shortSiteTitle: "Tim Hyson Personal Blog", // <title> ending for posts and pages
  siteDescription: "Personal Blog built on GatsbyJS.",
  siteUrl: "http://timhyson.co.uk",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "tim hyson",
  authorTwitterAccount: "timhyson",
  // info
  infoTitle: "tim hyson",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog built on GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/timhyson" },
    { name: "twitter", url: "https://twitter.com/timhyson" },
    { name: "facebook", url: "http://facebook.com/timhyson" }
  ]
};
