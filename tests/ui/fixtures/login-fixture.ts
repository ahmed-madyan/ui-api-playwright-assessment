import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';

/**
 * Custom Fixtures for Login Tests
 * Extends Playwright's base test with page object instances for login-related tests
 */
type myFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        use(homePage);
    }
});