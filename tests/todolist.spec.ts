import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test.describe("Suite de pruebas", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        loginPage.navigate()
        loginPage.LoginWithNewUser()
      });

    test('Add task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('Hacer tarea');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('Hacer tarea')).toBeVisible();
      });

    test('Complete Task', async ({ page }) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Witness something truly majestic' }).locator('i').click();
    });

    test('Clear Task', async ({ page }) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Witness something truly majestic' }).locator('i').click();
        await page.getByText('clear_allClear').click();
    });

})

