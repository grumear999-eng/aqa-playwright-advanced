import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;
    protected url: string;

    constructor(page: Page, url: string = '') {
        this.page = page;
        this.url = url;
    }

    /**
     * Navigate to the page URL
     */
    async open() {
        await this.page.goto(this.url);
    }
}
