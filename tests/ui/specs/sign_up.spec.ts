import { test } from '../fixtures/login-fixture';
import tsData from '../../../test-data/test-users';
//=======================Variables==========================
let email: string;
let password: string;

//=======================Group Test==========================
test.describe('[Sign-Up Feature] @ui', () => {
    //====================Tests======================
    test('Validate Sign-Up @ui', async ({ homePage, loginPage }) => {
        const randomNumber: number = Math.random();
        email = ("test" + randomNumber + "@gmail.com");
        password = ("test@" + randomNumber);
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
    });

    test('Validate login with signed up user @ui', async ({ homePage, loginPage }) => {
        await loginPage.navigateToURL();
        await homePage.navigateToSignInSignUpPage();
    });
});