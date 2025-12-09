import { expect, type Locator, type Page } from "@playwright/test";

/**
 * SignUp Page Object Model
 * Handles all interactions and validations for the user sign-up/registration page
 */
export class SignUp {
    readonly page: Page;
    readonly name_tb: Locator;
    readonly email_tb: Locator;
    readonly sign_up_btn: Locator;
    readonly mr_title_rb: Locator;
    readonly password_tb: Locator;
    readonly day_dd: Locator;
    readonly month_dd: Locator;
    readonly year_dd: Locator;
    readonly first_name_tb: Locator;
    readonly last_name_tb: Locator;
    readonly address_tb: Locator;
    readonly country_dd: Locator;
    readonly state_tb: Locator;
    readonly city_tb: Locator;
    readonly zip_code_tb: Locator;
    readonly mobile_number_tb: Locator;
    readonly create_account_btn: Locator;
    readonly account_created_msg: Locator;
    readonly account_created_congrats_msg: Locator;
    readonly account_created_info_msg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name_tb = page.locator("input[placeholder='Name']");
        this.email_tb = page.locator("input[data-qa='signup-email']");
        this.sign_up_btn = page.locator("button[data-qa='signup-button']");
        this.mr_title_rb = page.locator("input#id_gender1");
        this.password_tb = page.locator("input#password");
        this.day_dd = page.locator("select#days");
        this.month_dd = page.locator("select#months");
        this.year_dd = page.locator("select#years");
        this.first_name_tb = page.locator("input#first_name");
        this.last_name_tb = page.locator("input#last_name");
        this.address_tb = page.locator("input#address1");
        this.country_dd = page.locator("select#country");
        this.state_tb = page.locator("input#state");
        this.city_tb = page.locator("input#city");
        this.zip_code_tb = page.locator("input#zipcode");
        this.mobile_number_tb = page.locator("input#mobile_number");
        this.create_account_btn = page.locator("button[data-qa='create-account']");
        this.account_created_msg = page.locator("//b[normalize-space()='Account Created!']");
        this.account_created_congrats_msg = page.locator("//p[contains(text(),'Congratulations! Your new account has been success')]");
        this.account_created_info_msg = page.locator("//p[contains(text(),'You can now take advantage of member privileges to')]");
    }

    /**
     * Completes the sign-up form with all required user information
     * @param password - User password
     * @param birth_day - Day of birth (DD format)
     * @param birth_month - Month of birth (MM format)
     * @param birth_year - Year of birth (YYYY format)
     * @param first_name - User's first name
     * @param last_name - User's last name
     * @param address - User's street address
     * @param country - User's country
     * @param state - User's state/province
     * @param city - User's city
     * @param zip_code - User's postal/zip code
     * @param mobile_number - User's mobile phone number
     */
    async signUpWithValidData(
        password: string,
        birth_day: string,
        birth_month: string,
        birth_year: string,
        first_name: string,
        last_name: string,
        address: string,
        country: string,
        state: string,
        city: string,
        zip_code: string,
        mobile_number: string
    ) {
        await this.mr_title_rb.click();
        await this.password_tb.fill(password);
        await this.day_dd.selectOption(birth_day);
        await this.month_dd.selectOption(birth_month);
        await this.year_dd.selectOption(birth_year);
        await this.first_name_tb.fill(first_name);
        await this.last_name_tb.fill(last_name);
        await this.address_tb.fill(address);
        await this.country_dd.selectOption(country);
        await this.state_tb.fill(state);
        await this.city_tb.fill(city);
        await this.zip_code_tb.fill(zip_code);
        await this.mobile_number_tb.fill(mobile_number);
        await this.create_account_btn.click();
    }

    /**
     * Verifies that the "Account Created!" success message is visible
     */
    async verifyAccountCreatedMessageIsVisible() {
        await expect(this.account_created_msg).toBeVisible();
    }

    /**
     * Verifies that the congratulations message is visible after account creation
     */
    async verifyAccountCreatedCongratsMessageIsVisible() {
        await expect(this.account_created_congrats_msg).toBeVisible();
    }

    /**
     * Verifies that the account creation information message is visible
     */
    async verifyAccountCreatedInfoMessageIsVisible() {
        await expect(this.account_created_info_msg).toBeVisible();
    }
}