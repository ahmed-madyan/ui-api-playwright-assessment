import { expect, type Locator, type Page } from "@playwright/test"; // Import expect, Locator, and Page from Playwright

export class SignUp {
    //=====================Locators=====================
    readonly page: Page; // Create a variable for the page
    readonly name_tb: Locator; // Create a variable for the logout_btnn
    readonly email_tb: Locator; // Create a variable for the logout_btnn
    readonly sign_up_btn: Locator;

    readonly mr_title_rb: Locator; // Create a variable for the logout_btnn
    readonly password_tb: Locator; // Create a variable for the logout_btnn
    readonly day_dd: Locator; // Create a variable for the logout_btnn
    readonly month_dd: Locator; // Create a variable for the logout_btnn
    readonly year_dd: Locator;
    readonly first_name_tb: Locator; // Create a variable for the logout_btnn
    readonly last_name_tb: Locator;
    readonly address_tb: Locator; // Create a variable for the logout_btnn
    readonly country_dd: Locator; // Create a variable for the logout_btnn  
    readonly state_tb: Locator; // Create a variable for the logout_btnn
    readonly city_tb: Locator; // Create a variable for the logout_btnn
    readonly zip_code_tb: Locator; // Create a variable for the logout_btnn     
    readonly mobile_number_tb: Locator; // Create a variable for the logout_btnn
    readonly create_account_btn: Locator; // Create a variable for the logout_btnn
    readonly account_created_msg: Locator; // Create a variable for the logout_btnn
    readonly account_created_congrats_msg: Locator; // Create a variable for the logout_btnn
    readonly account_created_info_msg: Locator; // Create a variable for the logout_btnn

    //=====================Variables====================
    //=====================Constructor==================
    constructor(page: Page) {
        this.page = page;
        this.name_tb = page.locator("input[placeholder='Name']"); // Set the name_tb locator
        this.email_tb = page.locator("input[data-qa='signup-email']"); // Set the sign up btn locator
        this.sign_up_btn = page.locator("button[data-qa='signup-button']"); // Set the sign up btn locator
        this.mr_title_rb = page.locator("input#id_gender1"); // Set the mr_title_rb locator
        this.password_tb = page.locator("input#password"); // Set the password_tb locator
        this.day_dd = page.locator("select#days"); // Set the day_dd locator
        this.month_dd = page.locator("select#months"); // Set the month_dd locator      
        this.year_dd = page.locator("select#years"); // Set the year_dd locator
        this.first_name_tb = page.locator("input#first_name"); // Set the first_name_tb locator
        this.last_name_tb = page.locator("input#last_name"); // Set the last_name_tb locator
        this.address_tb = page.locator("input#address1"); // Set the address_tb locator
        this.country_dd = page.locator("select#country");
        this.state_tb = page.locator("input#state"); // Set the state_tb locator
        this.city_tb = page.locator("input#city"); // Set the city_tb locator
        this.zip_code_tb = page.locator("input#zipcode"); // Set the zip_code_tb locator
        this.mobile_number_tb = page.locator("input#mobile_number");
        this.create_account_btn = page.locator("button[data-qa='create-account']"); // Set the create_account_btn locator
        this.account_created_msg = page.locator("//b[normalize-space()='Account Created!']"); // Set the account_created_msg locator
        this.account_created_congrats_msg = page.locator("//p[contains(text(),'Congratulations! Your new account has been success')]"); // Set the account_created_msg locator
        this.account_created_info_msg = page.locator("//p[contains(text(),'You can now take advantage of member privileges to')]"); // Set the account_created_msg locator
    }
    //=====================Methods======================
    //---------------------Actions----------------------
    async signUpWithValidData(password: string, birth_day: string, birth_month: string, birth_year: string,
        first_name: string, last_name: string, address: string, country: string, state: string, city: string,
        zip_code: string, mobile_number: string
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
    //---------------------Assertions-------------------
    async verifyAccountCreatedMessageIsVisible() {
        await expect(this.account_created_msg).toBeVisible();
    }
    async verifyAccountCreatedCongratsMessageIsVisible() {
        await expect(this.account_created_congrats_msg).toBeVisible();
    }
    async verifyAccountCreatedInfoMessageIsVisible() {
        await expect(this.account_created_info_msg).toBeVisible();
    }

}