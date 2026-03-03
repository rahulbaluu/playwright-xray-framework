import {test, expect} from '@playwright/test'
test('TA-1 Verify Login Successful', async ({ page}) => {
    await page.goto('https://www.automationexercise.com/signup');
//    await page.click('.fc-button-label');
    await page.locator('[data-qa="login-email"]').fill('rahul0987@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('Rahul1234');
    await page.locator('[data-qa="login-button"]').click();
    const title = await page.title();
    console.log('Page title:', title);
})

test('TA-3 Unsuccessful Login try with wrong password', async ({ page}) => {
    await page.goto('https://www.automationexercise.com/signup');
//    await page.click('.fc-button-label');
    await page.locator('[data-qa="login-email"]').fill('rahul0987@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('Rahul1235');
    await page.locator('[data-qa="login-button"]').click();
    const error = page.locator('text=Your email or password is incorrect!');
    await expect(error).toBeVisible();
    const title = await page.title();
    console.log('Page title:', title);
})