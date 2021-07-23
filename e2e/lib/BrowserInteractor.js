

export class BrowserInteractor {

    async openUrl(url, page = global.page) {
       return page.goto(url, {timeout: 60000});
    }

    async clickOn(selector, page = global.page) {
        await page.click(selector);
    }

    async enterText(selector, text, page = global.page) {
        await page.type(selector, text);
    }

    async isSelectorDisplayed(selector, options = {page: global.page, timeout: 30000}) {
        return await options.page.isVisible(selector, {timeout: options.timeout});
    }
}