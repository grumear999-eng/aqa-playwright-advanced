import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ButtonsPage extends BasePage {
    readonly doubleClickBtn: Locator;
    readonly rightClickBtn: Locator;
    readonly dynamicClickBtn: Locator;

    readonly doubleClickMessage: Locator;
    readonly rightClickMessage: Locator;
    readonly dynamicClickMessage: Locator;

    constructor(page: Page) {
        super(page, '/buttons');
        this.doubleClickBtn = page.locator('#doubleClickBtn');
        this.rightClickBtn = page.locator('#rightClickBtn');
        // Using an exact text match to find the standard click button
        this.dynamicClickBtn = page.getByRole('button', { name: 'Click Me', exact: true });

        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }

    async performDoubleClick() {
        await this.doubleClickBtn.dblclick();
    }

    async performRightClick() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async performDynamicClick() {
        await this.dynamicClickBtn.click();
    }
}
