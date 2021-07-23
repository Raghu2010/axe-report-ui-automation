import {setDefaultTimeout, BeforeAll, AfterAll} from "@cucumber/cucumber";
import {BrowserFactory} from "../lib/BrowserFactory.js";

let browserFactory = new BrowserFactory();

setDefaultTimeout(180000);

BeforeAll(async () => {
    await browserFactory.openBrowser();
});

AfterAll(async () => {
    await browserFactory.closeBrowser();
})




