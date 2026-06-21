import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const COOKIE_KEY = 'tofariasti_cookie_policy_v1'

async function acceptCookies(page: import('@playwright/test').Page) {
  await page.addInitScript((key) => {
    localStorage.setItem(key, '1')
  }, COOKIE_KEY)
}

test.describe('Portfolio a11y', () => {
  test('dev home passes axe', async ({ page }) => {
    await acceptCookies(page)
    await page.goto('./')
    await expect(page.locator('h1')).toContainText('Tiago O. de Farias')
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })

  test('drone page passes axe', async ({ page }) => {
    await acceptCookies(page)
    await page.goto('#/drone')
    await expect(page.locator('h1')).toBeVisible()
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })

  test('language switch updates content', async ({ page }) => {
    await acceptCookies(page)
    await page.goto('./')
    await page.getByRole('button', { name: 'EN', exact: true }).click()
    await expect(page.locator('.hero-desc')).toContainText('Senior Backend Developer')
  })

  test('section nav keeps home route and shows target section', async ({ page }) => {
    await acceptCookies(page)
    await page.goto('./')
    await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Freelance' }).click()
    await expect(page).not.toHaveURL(/freelance/)
    await expect(page.locator('#freelance')).toBeVisible()
    await expect(page.locator('#freelance h2')).toContainText(/freelance/i)
  })

  test('legacy section hash recovers to home route', async ({ page }) => {
    await acceptCookies(page)
    await page.goto('./#/freelance')
    await expect(page).not.toHaveURL(/\/freelance$/)
    await expect(page.locator('#freelance')).toBeVisible()
  })
})
