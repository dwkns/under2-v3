require('dotenv').config();

let site = {
  name: "Under2",
  locale: "en_GB",
  legalName: "Under2 Limited",
  url: "https://under2.global",
  logo: "https://under2.global/images/u2-logo-for-white.png",
  foundingDate: "2019",
  privacyEmail: "privacy@under2.global",
address: { 
    "type": "PostalAddress", 
    "streetAddress": "7 Bell Yard", 
    "addressRegion": "London", 
    "postalCode": "WC2A 2JR", 
    "addressCountry": "UK" },
  theme: {
   colour: '#317EFB'
  },
  "twitterURL" : "https://twitter.com/under2global",
  "linkedInURL" : "https://www.linkedin.com/company/under2/",
  "author": {
    "handle": "@dwkns",
    "name": "dwkns"
  },
  "googleAnalyticsID": "G-YW7QMHS01K",
  "actOnID": "44267",
  "linkedInID": "3949985",
  "urls": {
    "production": "https://under2.global",
    "staging": "https://staging.under2.global",
    "development": "http://localhost:8080"
  },
  "font":"IBMPlexSans.var.latin-subset.woff2",
  metadata: {
    default_og_image: '/images/default_og_image.png',
    default_og_type: 'article'
  },
  "development": {
    "baseURL":  "http://localhost:8080",
    "domain": "localhost",
    "debug": true,
    "debugScreens": false,
    "showDefaultTextInForms": true,
    "formsActive": false,
    "speedcurveActive": false,
    "linkedInActive": false,
    "googleAnalyticsActive": false,
    "actOnActive": false,
    "createSitemap" : true,
    "allowIndexing" : false,
    "allowRobots" : false,
    "inlineCSS" : false,
    "compressCSS" : false,
    "compressHTML": false
  },
  "staging": {
    "baseURL":  "https://staging.under2.global",
    "domain": "staging.under2.global",
    "debug": false,
    "debugScreens": false,
    "showDefaultTextInForms": false,
    "formsActive": false,
    "speedcurveActive": false,
    "linkedInActive": false,
    "googleAnalyticsActive": false,
    "actOnActive": false,
    "createSitemap" : true,
    "allowIndexing" : false,
    "allowRobots" : false,
    "inlineCSS" : true,
    "compressCSS" : true,
    "compressHTML": true
  },
  "production": {
    "baseURL":  "https://under2.global",
    "domain": "under2.global",
    "debug": false,
    "debugScreens": false,
    "showDefaultTextInForms": false,
    "formsActive": true,
    "speedcurveActive": true,
    "linkedInActive": true,
    "googleAnalyticsActive": true,
    "actOnActive": true,
    "createSitemap" : true,
    "allowIndexing" : true,
    "allowRobots" : true,
    "inlineCSS" : true,
    "compressCSS" : true,
    "compressHTML": true
  },
  // development: {
  //   domain: 'localhost',
  //   baseURL: 'https://localhost:8080',
  //   debug: true,
  //   minifyCSS: false,
  // },
  // staging: {
  //   domain: 'staging-tiny-start.netlify.app',
  //   baseURL: 'https://staging-tiny-start.netlify.app',
  //   debug: true,
  //   minifyCSS: true,
  // },
  // production: {
  //   domain: 'tiny-start.netlify.app',
  //   baseURL: 'https://tiny-start.netlify.app',
  //   debug: false,
  //   minifyCSS: true,
  // },
  currentYear: new Date().getFullYear(),
  currentDate: new Date(),
  version: Math.random().toString(36).substr(2, 8),
  currentEnv: process.env.CURRENT_ENV
}
module.exports = site
