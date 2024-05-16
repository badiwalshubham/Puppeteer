const puppeteer = require('puppeteer');

async function run() {
    // Launch the a browser instance
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: {width: 1440, height: 600},
        devtools: true,
        slowMo: 1000
        // env: "env"
    },);
    // const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://yahoo.com');

    const title = await page.title();

    console.log(title);

    const heading = await page.$eval('p', (element) => element.textContent);
    
    console.log(heading);

    await page.screenshot({ path: '3.png' });

    await page.pdf({ path: 'google.pdf', format: 'A4' });

    await browser.close();
}

run();