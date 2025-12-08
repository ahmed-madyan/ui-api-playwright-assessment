import { expect, type Locator, type Page } from "@playwright/test"; // Import expect, Locator, and Page from Playwright
import  url  from "../../utils/urls";

export class LoginPage{
    //=====================Locators=====================
    readonly page: Page; // Create a variable for the page
    readonly email_tb: Locator; // Create a variable for the username textbox
    readonly password_tb: Locator; // Create a variable for the password textbox
    readonly login_btn: Locator; // Create a variable for the login button
    readonly invalidLoginMessage: Locator; // Create a variable for the invalid login message
    //=====================Variables====================
    readonly url: string = url.test.ui; // Create a variable for the URL
    //=====================Constructor==================
    constructor(page: Page) {
        this.page = page;
        this.email_tb = page.locator("//input[@data-qa='login-email']"); // Set the username textbox locator
        this.password_tb = page.locator("//input[@placeholder='Password']"); // Set the password textbox locator
        this.login_btn = page.locator("button[data-qa='login-button']"); // Set the login button locator
        this.invalidLoginMessage = page.locator("//p[normalize-space()='Your email or password is incorrect!']"); // Set the invalid login message locator
    }
    //=====================Methods======================
    //---------------------Actions----------------------
    async open(){
        await this.page.goto(this.url); // Open the URL
    }

    async login(username: string, password: string){
        await this.email_tb.fill(username); // Fill in the username textbox
        await this.password_tb.fill(password); // Fill in the password textbox
        await this.login_btn.click(); // Click the login button
    }
    //---------------------Assertions-------------------
    async assertInvalidLoginMessage(){
        await expect(this.invalidLoginMessage).toBeVisible(); // Verify the invalid login message
    }
}