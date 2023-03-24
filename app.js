const connection = require("./connection");
const puppeteer = require('puppeteer-extra')
const {Walmart} = require('./stores/Walmart');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)

puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)

puppeteer.use(AdblockerPlugin({ blockTrackers: true }));


(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
  
    const mySearch = new Walmart("Luigi's Mansion 3");

    await mySearch.extractData(page);
  
    await browser.close();
})();

  