import { test, expect } from '@playwright/test';

test.describe('Enquiry Form Flow', () => {
  test('should successfully submit an enquiry and show thank you message', async ({ page }) => {
    // Navigate to the main page
    await page.goto('http://localhost:3000');

    // Assuming the form has inputs for name, phone, etc.
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="phone"]', '9876543210');
    
    // Check if email input exists
    const emailLocator = page.locator('input[name="email"]');
    if (await emailLocator.count() > 0) {
      await emailLocator.fill('test@example.com');
    }
    
    // Select options if they exist
    const timingLocator = page.locator('select[name="timing"]');
    if (await timingLocator.count() > 0) {
      await timingLocator.selectOption({ index: 1 });
    }
    
    const intentLocator = page.locator('select[name="intent"]');
    if (await intentLocator.count() > 0) {
      await intentLocator.selectOption({ index: 1 });
    }

    // Submit the form
    await page.locator('button[type="submit"]').click();

    // Verify successful submission or redirect
    await expect(page).toHaveURL(/thank-you/i, { timeout: 10000 }).catch(async () => {
      // Or check for success message in DOM
      await expect(page.locator('text=Thank you').or(page.locator('text=success'))).toBeVisible({ timeout: 10000 });
    });
  });
});
