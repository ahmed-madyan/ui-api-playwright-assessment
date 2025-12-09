import { expect, type Locator, type Page } from "@playwright/test";
import url from "../../utils/urls";

/**
 * LoginPage Page Object Model
 * Handles all interactions and validations for the login page
 */
export class LoginPage {
    readonly page: Page;
    readonly email_tb: Locator;
    readonly password_tb: Locator;
    readonly login_btn: Locator;
    readonly invalidLoginMessage: Locator;
    readonly url: string = url.test.ui;

    constructor(page: Page) {
        this.page = page;
        this.email_tb = page.locator("//input[@data-qa='login-email']");
        this.password_tb = page.locator("//input[@placeholder='Password']");
        this.login_btn = page.locator("button[data-qa='login-button']");
        this.invalidLoginMessage = page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    }

    /**
     * Navigates to the login page URL
     */
    async navigateToURL() {
        await this.page.goto(this.url);
    }

    /**
     * Performs user login with provided credentials
     * @param username - User email address
     * @param password - User password
     */
    async login(username: string, password: string) {
        await this.email_tb.fill(username);
        await this.password_tb.fill(password);
        await this.login_btn.click();
    }

    /**
     * Asserts that the invalid login error message is visible
     * Used to verify failed login attempts
     */
    async assertInvalidLoginMessage() {
        await expect(this.invalidLoginMessage).toBeVisible();
    }
}