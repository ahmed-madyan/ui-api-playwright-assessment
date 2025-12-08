import { expect, type Locator, type Page } from "@playwright/test"; // Import expect, Locator, and Page from Playwright

export class SignUp {
    //=====================Locators=====================
    readonly page: Page; // Create a variable for the page
    readonly name_tb: Locator; // Create a variable for the logout_btnn
    readonly email_tb: Locator; // Create a variable for the logout_btnn
    readonly sign_up_btn: Locator;

    //=====================Variables====================
    //=====================Constructor==================
    constructor(page: Page) {
        this.page = page;
        this.name_tb = page.locator("input[placeholder='Name']"); // Set the name_tb locator
        this.email_tb = page.locator("input[data-qa='signup-email']"); // Set the sign up btn locator
        this.sign_up_btn = page.locator("button[data-qa='signup-button']"); // Set the sign up btn locator

    }
    //=====================Methods======================
    //---------------------Actions----------------------
    // async navigateToSignInSignUpPage(){
    //     await this.sign_up_btn.click();
    // }
    //---------------------Assertions-------------------
    // async assertLogoutBtn(){
    //     await expect(this.name_tb).toBeVisible();
    // }

}