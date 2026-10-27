import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bugbasket-rho.vercel.app/');
  await page.getByRole('button', { name: 'Add Ceramic Coffee Mug "Morning" to cart' }).click();
  await page.getByTestId('nav-cart-link').click();
  await page.getByTestId('cart-line-qty-select').selectOption('3');
  await page.goto('https://bugbasket-rho.vercel.app/cart');
  await page.getByTestId('cart-line-remove-btn').click();
});
