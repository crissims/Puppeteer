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

    await page.evaluate(() => {

        // toda essa função será executada no browser 

        // vamos pegar todas as imagens que estão na parte de posts
        const NodeList = document.querySelectorAll('article img');
        // transformar o NodeList em array
        const imgArray = [...NodeList];

        // transformar os nodes(elementos html) em objetos JS
        const list = imgArray.map(({ src }) => ({
            src
        }));

        console.log(list);
        // colocar o resultado para fora da função
    });





    //await page.screenshot({ path: 'insta3.png' });



    //await browser.close();
})();