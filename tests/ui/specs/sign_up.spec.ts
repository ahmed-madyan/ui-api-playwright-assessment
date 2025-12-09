import { test } from '../fixtures/signUp-fixture';
import tsData from '../../../test-data/sign_up';
//=======================Variables==========================
let email: string;
//=======================Group Test==========================
test.describe('[Sign-Up Feature] @ui', () => {
    //====================Tests======================
    test('[Sign-Up][UI][TC01][E2E] Validate login with signed up user @ui', async ({ homePage, loginPage, signUp }) => {
        const randomNumber: number = Math.random();
        email = ("test" + randomNumber + "@gmail.com");
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
        await homePage.navigateToSignUpPage(tsData.name, email);
        await signUp.signUpWithValidData(
            tsData.password, tsData.birth_day, tsData.birth_month, tsData.birth_year,
            tsData.first_name, tsData.last_name, tsData.address, tsData.country, tsData.state, tsData.city,
            tsData.zip_code, tsData.mobile_number);
        await signUp.verifyAccountCreatedMessageIsVisible();
        await signUp.verifyAccountCreatedCongratsMessageIsVisible();
        await signUp.verifyAccountCreatedInfoMessageIsVisible();
        await loginPage.navigateToURL();
        await homePage.logout();
        await homePage.navigateToSignInSignUpPage();
        await loginPage.login(email, tsData.password);
        await homePage.assertLogoutBtn();
    });
});