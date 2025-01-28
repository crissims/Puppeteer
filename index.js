import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.instagram.com/crisplusm/', {
        waitUntil: 'networkidle2',
    });

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    // 'button' is a CSS selector.
    await page.locator('button').click();

    // Type into search box.
    //await page.locator('.devsite-search-field').fill('automate beyond recorder');

    // Wait and click on first result.
    //await page.locator('.devsite-result-item-link').click();



    await page.screenshot({ path: 'insta3.png' });



    await browser.close();
})();