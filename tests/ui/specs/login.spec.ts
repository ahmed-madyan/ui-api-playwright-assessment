import { test } from '../fixtures/login-fixture';
import tsData from '../../../test-data/test-users';

test.describe('[Login Feature] @ui',() =>{
//====================Tests======================
    test('Validate valid login @ui', async ( {homePage,loginPage} ) => {
        await loginPage.open();
        await homePage.navigateToSignUpPage();
        await loginPage.login(tsData.valid_email, tsData.valid_password);
        await homePage.assertLogoutBtn();
    });

    test('Validate in-valid login @ui', async ( {homePage,loginPage} ) => {
        await loginPage.open();
        await homePage.navigateToSignUpPage();
        await loginPage.login(tsData.invalid_email, tsData.invalid_password);
        await loginPage.assertInvalidLoginMessage();
    });
});