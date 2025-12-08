import { test } from '../fixtures/login-fixture';
import tsData from '../../../test-data/test-users';

//=======================Group Test==========================
test.describe('[Login Feature] @ui', () => {
    //====================Tests======================
    test('Validate valid login @ui', async ({ homePage, loginPage }) => {
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(tsData.credentials.valid.email, tsData.credentials.valid.password);
        await homePage.assertLogoutBtn();
    });

    test('Validate in-valid login @ui', async ({ homePage, loginPage }) => {
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(tsData.credentials.invalid.email, tsData.credentials.invalid.password);
        await loginPage.assertInvalidLoginMessage();
    });
});