const { test, expect } = require("@playwright/test");

test("can authenticate", async ({ page }) => {
	await page.goto("http://localhost:3000/user/signin");

	await page.getByLabel("Email").fill("atmatm9182@gmail.com");
	await page.getByLabel("Password").fill("123456");

	await page.click("input[type='submit']");

	await expect(page).toHaveURL("http://localhost:3000/user/profile");
});

test("cannot access profile unauthenticated", async ({ page }) => {
	await page.goto("http://localhost:3000/user/profile");
	await expect(page).toHaveURL("http://localhost:3000/user/signin?returnUrl=/user/profile");
});
