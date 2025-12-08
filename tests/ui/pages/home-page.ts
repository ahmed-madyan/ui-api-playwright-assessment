import { expect, type Locator, type Page } from "@playwright/test"; // Import expect, Locator, and Page from Playwright

export class HomePage{
    //=====================Locators=====================
    readonly page: Page; // Create a variable for the page
    readonly logout_btn: Locator; // Create a variable for the logout_btnn
    readonly sign_up_btn: Locator;
    //=====================Variables====================
    //=====================Constructor==================
    constructor(page: Page) {
        this.page = page;
        this.logout_btn = page.locator("a[href='/logout']"); // Set the logout_btn locator
        this.sign_up_btn = page.locator("a[href='/login']"); // Set the sign up btn locator
    }
    //=====================Methods======================
    //---------------------Actions----------------------
    async navigateToSignUpPage(){
        await this.sign_up_btn.click();
    }
    //---------------------Assertions-------------------
    async assertLogoutBtn(){
        await expect(this.logout_btn).toBeVisible();
    }
    
}