class Walmart {
    constructor(searchText) {
        this.searchText = searchText;
        this.url = 'https://www.walmart.com/';
        this.results = [];
    }

    async extractData(page){
        await page.goto(this.url);
        await page.waitForNavigation({
            waitUntil: 'networkidle0',
          });
        // Type into search box
        await page.type('input[aria-label="Search"]', `${this.searchText}`);
        //await page.click('button[aria-label="Search icon"]');
        await new Promise(r => setTimeout(r, 1000));
        await page.keyboard.press('Enter');
        //select physical only
        

        

        await page.waitForNavigation({
            waitUntil: 'networkidle0',
          });

        await page.waitForSelector('#results-container');
        await page.evaluate(() => {     
            [...document.querySelectorAll('div')].find(element => element.getAttribute("data-item-id")).firstChild.click();
        });
    

        await new Promise(r => setTimeout(r, 9000));

        // await page.click('button[data-test="filters-menu"]');
        // await page.waitForSelector('[data-test="@web/OverlayModal"]');
        // await page.click('button[data-test="facet-group-d_physicalmediaformat"]');
        // await page.click('#chk-2q830p6d44f');
        // await page.click('button[aria-label="Update"]');
        // await page.click('button[aria-label="Update"]');
        // // click to page
        // await page.click('button[aria-label="Update"]');
        // await page.waitForSelector('button[data-test="filters-menu"]');

        // await page.evaluate(() => {
        //     [...document.querySelectorAll('.elements button')].find(element => element.textContent === 'Button text').click();
        //   });
        // const textSelector = await page.waitForSelector("[data-test='product-details']");


        // const fullTitle = await textSelector.evaluate(el => el.textContent);
      
        // // Print the full title
        // console.log('The title of this blog post is "%s".', fullTitle);

        return page;
    }
  }

exports.Walmart = Walmart