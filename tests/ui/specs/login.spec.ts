import { test } from '../fixtures/login-fixture';
import tsData from '../../../test-data/test-users';

/**
 * Login Feature Test Suite
 * Tests both successful and failed login scenarios
 */
test.describe('[Login Feature] @ui', () => {
    /**
     * Test: Valid Login
     * Verifies successful login with valid credentials
     * Expected: User is logged in and logout button is visible
     */
    test('Validate valid login @ui', async ({ homePage, loginPage }) => {
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(tsData.credentials.valid.email, tsData.credentials.valid.password);
        await homePage.assertLogoutBtn();
    });

    /**
     * Test: Invalid Login
     * Verifies error handling for login with invalid credentials
     * Expected: Error message is displayed indicating incorrect credentials
     */
    test('Validate in-valid login @ui', async ({ homePage, loginPage }) => {
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(tsData.credentials.invalid.email, tsData.credentials.invalid.password);
        await loginPage.assertInvalidLoginMessage();
    });
});