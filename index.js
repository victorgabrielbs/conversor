const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
async function robo() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('\nInforme uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('\nInforme uma moeda desejada: ') || 'real';
    const url = `https://www.google.com/search?q=${moedaBase}+pra+${moedaFinal}&oq=${moedaBase}+pra+${moedaFinal}&aqs=chrome..69i57j0i10l5j0i10i433j0i10.3900j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });
    console.log(`\nO valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

    await browser.close();
}
robo();