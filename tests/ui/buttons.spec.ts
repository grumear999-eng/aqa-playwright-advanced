import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../../pages/ButtonsPage';

test.describe('Buttons Page UI Tests', () => {
    let buttonsPage: ButtonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.open();
    });

    test('should perform double click successfully', async () => {
        await buttonsPage.performDoubleClick();
        await expect(buttonsPage.doubleClickMessage).toBeVisible();
        await expect(buttonsPage.doubleClickMessage).toHaveText('You have done a double click');
    });

    test('should perform right click successfully', async () => {
        await buttonsPage.performRightClick();
        await expect(buttonsPage.rightClickMessage).toBeVisible();
        await expect(buttonsPage.rightClickMessage).toHaveText('You have done a right click');
    });

    test('should perform dynamic click successfully', async () => {
        await buttonsPage.performDynamicClick();
        await expect(buttonsPage.dynamicClickMessage).toBeVisible();
        await expect(buttonsPage.dynamicClickMessage).toHaveText('You have done a dynamic click');
    });
});
