import { test } from '../fixtures/signUp-fixture';
import tsData from '../../../test-data/sign_up';

/**
 * Sign-Up Feature Test Suite
 * End-to-end test for user registration and subsequent login
 */
test.describe('[Sign-Up Feature] @ui', () => {
    /**
     * Test: End-to-End Sign-Up and Login
     * Complete user registration flow followed by login verification
     * Steps:
     * 1. Generate unique email for new user
     * 2. Navigate to sign-up page and initiate registration
     * 3. Complete sign-up form with user details
     * 4. Verify account creation success messages
     * 5. Logout and verify login with newly created account
     * Expected: Account is created successfully and user can login with new credentials
     */
    test('[Sign-Up][UI][TC01][E2E] Validate login with signed up user @ui', async ({ homePage, loginPage, signUp }) => {
        // Generate unique email to avoid conflicts with existing accounts
        const randomNumber: number = Math.random();
        const email: string = ("test" + randomNumber + "@gmail.com");
        
        // Navigate to application and start sign-up process
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await homePage.navigateToSignUpPage(tsData.name, email);
        
        // Complete registration form
        await signUp.signUpWithValidData(
            tsData.password,
            tsData.birth_day,
            tsData.birth_month,
            tsData.birth_year,
            tsData.first_name,
            tsData.last_name,
            tsData.address,
            tsData.country,
            tsData.state,
            tsData.city,
            tsData.zip_code,
            tsData.mobile_number
        );
        
        // Verify account creation success messages
        await signUp.verifyAccountCreatedMessageIsVisible();
        await signUp.verifyAccountCreatedCongratsMessageIsVisible();
        await signUp.verifyAccountCreatedInfoMessageIsVisible();
        
        // Verify login with newly created account
        await loginPage.navigateToURL();
        await homePage.logout();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(email, tsData.password);
        await homePage.assertLogoutBtn();
    });
});