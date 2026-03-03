// tests/login/login.spec.ts
import { test, expect } from '@playwright/test';

// TA-1: Verify successful login
test('TA-1 Verify Login Successful', async ({ page }) => {
  // Navigate to the signup/login page
  await page.goto('https://www.automationexercise.com/signup');

  // Fill in login credentials
  await page.locator('[data-qa="login-email"]').fill('rahul0987@gmail.com');
  await page.locator('[data-qa="login-password"]').fill('Rahul1234');

  // Click login
  await page.locator('[data-qa="login-button"]').click();

  // Assert page title (optional validation)
  const title = await page.title();
  console.log('Page title:', title);

  // Optionally, assert successful login by checking dashboard or logout button
  const logoutButton = page.locator('text=Logout');
  await expect(logoutButton).toBeVisible();
});

// TA-3: Verify unsuccessful login with wrong password
test('TA-3 Unsuccessful Login try with wrong password', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/signup');

  await page.locator('[data-qa="login-email"]').fill('rahul0987@gmail.com');
  await page.locator('[data-qa="login-password"]').fill('Rahul1235'); // wrong password
  await page.locator('[data-qa="login-button"]').click();

  // Check for error message
  const errorMessage = page.locator('text=Your email or password is incorrect!');
  await expect(errorMessage).toBeVisible();

  // Log page title
  const title = await page.title();
  console.log('Page title:', title);
});