import url from "../../utils/urls";
import signUpData from '../../../test-data/sign_up';
import usersData from '../../../test-data/test-users';

/**
 * API Endpoints Configuration
 * Defines base URL and endpoint paths for user-related API operations
 */
const baseUrl = url.test.api;
const createAccountEndpoint = 'api/createAccount';
const verifyLoginEndpoint = 'api/verifyLogin';
const getUserDetailsByEmailEndpoint = 'api/getUserDetailByEmail';

/**
 * Request Payloads and Headers
 * Prepares data for API requests including dynamically generated email
 */
let email: string;
const randomNumber: number = Math.random();
email = ("test" + randomNumber + "@gmail.com");

const createAccount_requestPayload = {
    name: (signUpData.name + randomNumber),
    email: email,
    password: signUpData.password,
    title: signUpData.title,
    birth_date: signUpData.birth_day,
    birth_month: signUpData.birth_month,
    birth_year: signUpData.birth_year,
    firstname: signUpData.first_name,
    lastname: signUpData.last_name,
    company: signUpData.company,
    address1: signUpData.address,
    address2: signUpData.address2,
    country: signUpData.country,
    zipcode: signUpData.zip_code,
    state: signUpData.state,
    city: signUpData.city,
    mobile_number: signUpData.mobile_number
};

const verifyLogin_Param = {
    email: usersData.credentials.valid.email,
    password: usersData.credentials.valid.password
};

const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded"
};

const getUserDetailByEmail_Param = {
    email: usersData.credentials.valid.email
};

/**
 * API Request Functions
 * Functions to interact with user-related API endpoints
 */

/**
 * Creates a new user account
 * @param request - Playwright API request context
 * @returns Promise<Response> - API response with status code 201 on success
 */
async function createUser(request: any) {
    const response = await request.post(createAccountEndpoint, {
        form: createAccount_requestPayload,
        Headers: requestHeaders
    });
    return response;
}

/**
 * Verifies user login credentials
 * @param request - Playwright API request context
 * @returns Promise<Response> - API response with status code 200 on success
 */
async function verifyLogin(request: any) {
    const response = await request.post(verifyLoginEndpoint, {
        form: verifyLogin_Param,
        Headers: requestHeaders
    });
    return response;
}

/**
 * Retrieves user details by email address
 * @param request - Playwright API request context
 * @returns Promise<Response> - API response with status code 200 and user details
 */
async function getUserDetailsByEmail(request: any) {
    const response = await request.get(getUserDetailsByEmailEndpoint, {
        params: getUserDetailByEmail_Param
    });
    return response;
}

export default { verifyLogin, createUser, getUserDetailsByEmail };