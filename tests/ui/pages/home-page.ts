import { expect, type Locator, type Page } from "@playwright/test";

/**
 * HomePage Page Object Model
 * Handles interactions with the home page including navigation and sign-up initiation
 */
export class HomePage {
    readonly page: Page;
    readonly logout_btn: Locator;
    readonly sign_in_sign_up_btn: Locator;
    readonly name_tb: Locator;
    readonly email_tb: Locator;
    readonly sign_up_btn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logout_btn = page.locator("a[href='/logout']");
        this.sign_in_sign_up_btn = page.locator("a[href='/login']");
        this.name_tb = page.locator("input[placeholder='Name']");
        this.email_tb = page.locator("input[data-qa='signup-email']");
        this.sign_up_btn = page.locator("button[data-qa='signup-button']");
    }

    /**
     * Navigates to the sign-in/sign-up page by clicking the login link
     */
    async navigateToSignInSignUpPage() {
        await this.sign_in_sign_up_btn.click();
    }

    /**
     * Initiates the sign-up process by filling in name and email, then clicking sign-up button
     * @param name - User's name for sign-up
     * @param email - User's email address for sign-up
     */
    async navigateToSignUpPage(name: string, email: string) {
        await this.name_tb.fill(name);
        await this.email_tb.fill(email);
        await this.sign_up_btn.click();
    }

    /**
     * Logs out the current user by clicking the logout button
     */
    async logout() {
        await this.logout_btn.click();
    }

    /**
     * Asserts that the logout button is visible
     * Used to verify successful login (logout button appears after login)
     */
    async assertLogoutBtn() {
        await expect(this.logout_btn).toBeVisible();
    }
}