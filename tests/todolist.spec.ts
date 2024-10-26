import { test, expect } from '@playwright/test';

test.describe("Suite de pruebas", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:5000/#intro');
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
      });

    test('Add task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('Hacer tarea');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('Hacer tarea')).toBeVisible();
      });

    test('Complete Task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('Hacer tarea');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('Hacer tarea')).toBeVisible();
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Drive' }).locator('i').click();
        await expect(page.locator('span').filter({ hasText: 'check_box Drive a motorcycle' }).locator('i')).toBeVisible();
    });

    test('Clear Task', async ({ page }) => {
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill('Hacer tarea');
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        await expect(page.getByText('Hacer tarea')).toBeVisible();
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Drive' }).locator('i').click();
        await expect(page.locator('span').filter({ hasText: 'check_box Drive a motorcycle' }).locator('i')).toBeVisible();
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.getByText('clear_allClear').click();
        await page.getByText('clear_allClear').click();
        await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
        await page.getByText('Get a test account').click();
        await page.locator('#login-btn').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Witness something truly majestic' }).locator('i').click();
        await page.locator('span').filter({ hasText: 'check_box_outline_blank Help' }).locator('i').click();
        await page.getByText('check_box_outline_blank').click();
        await page.getByText('clear_allClear').click();
    });

})

