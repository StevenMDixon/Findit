const gameData = require('gameData');

class Target {
    constructor(searchText) {
        this.searchText = searchText;
        this.url = 'https://www.target.com/';
    }

    async extractData(page){
        await page.goto(this.url);
  
        // Type into search box
        await page.type('#search', `${this.searchText}`);
        await page.click('[data-test="@web/Search/SearchButton"]');
        
        // select physical only
        await page.waitForSelector('button[data-test="filters-menu"]');
        await page.click('button[data-test="filters-menu"]');
        await page.waitForSelector('[data-test="@web/OverlayModal"]');
        await page.click('button[data-test="facet-group-d_physicalmediaformat"]');
        await page.click('#chk-2q830p6d44f');
        await page.click('button[aria-label="Update"]');
        await page.click('button[aria-label="Update"]');
        // click to page
        await page.click('button[aria-label="Update"]');
        await page.waitForSelector('button[data-test="filters-menu"]');

        await page.evaluate(() => {
            [...document.querySelectorAll('.elements button')].find(element => element.textContent === 'Button text').click();
          });
        const textSelector = await page.waitForSelector("[data-test='product-details']");


        const fullTitle = await textSelector.evaluate(el => el.textContent);
      
        // Print the full title
        console.log('The title of this blog post is "%s".', fullTitle);

        return page;
    }
}

exports.Target = Target;