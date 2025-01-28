import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.instagram.com/crisplusm/', {
        waitUntil: 'networkidle2',
    });

    // Set screen size.
    //await page.setViewport({ width: 1080, height: 1024 });

    // 'button' is a CSS selector.
    await page.locator('button').click();

    const imgList = await page.evaluate(() => {

        const NodeList = document.querySelectorAll("article img");
        const imgArray = [...NodeList];

        const imgList = imgArray.map(({ src }) => ({
            src,
        }));

        // colocar o resultado para fora da função
        return imgList;
    });

    // escrever os dados em um arquivo local (json)
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if (err) throw new Error('something went wrong')
        console.log('well done!')
    })






    await browser.close();
})();