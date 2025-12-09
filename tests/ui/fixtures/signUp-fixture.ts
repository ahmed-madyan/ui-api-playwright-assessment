import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { SignUp } from '../pages/signUp-page';

/**
 * Custom Fixtures for Sign-Up Tests
 * Extends Playwright's base test with page object instances for sign-up and login tests
 */
type myFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    signUp: SignUp;
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        use(homePage);
    },

    signUp: async ({ page }, use) => {
        const signUp = new SignUp(page);
        use(signUp);
    }
});