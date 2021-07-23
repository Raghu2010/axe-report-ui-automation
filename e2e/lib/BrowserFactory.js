
import {chromium, firefox} from "playwright";

const chromeLaunchOptions = {
    headless: false,
    slowMo: 50,
    args: [
    '--start-maximized'
    ]
};


export class BrowserFactory {
    browser; 
    page;

    async openBrowser(browserName = process.env['BROWSER_NAME']) {
        let context;
        browserName = browserName ? browserName : 'chrome';
        switch(browserName.toLowerCase()) {
            case "chrome": {
                this.browser = await chromium.launch({headless: false});
                break;
            }

            case "firefox": {
                this.browser = await firefox.launch({headless: false});
                break;
            }
        }
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();

        global.browser = this.browser;
        global.page = this.page;
        return this.page;
    }

    async closeBrowser() {
        if(this.browser) {
            await this.browser.close();
        }
    }
}