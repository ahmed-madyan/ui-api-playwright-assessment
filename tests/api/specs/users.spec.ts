import { test, expect } from '@playwright/test';
import usersRequest from '../endpoints/users-endpoints';
import tsData from '../../../test-data/test-users';
//=======================Variables==========================
let response;
let jsonResponse;
//========================Tests=============================
test.describe('Users API Test @api', () => {
    //-----------------------POST 201------------------------
    test('Validate Create Account Endpoint', async ({ request }) => {
        response = await usersRequest.createUser(request);
        const responseMessage = await response
        jsonResponse = await response.json();
        console.log(jsonResponse);
        //assert on status code
        await expect(jsonResponse.responseCode).toBe(201);
        //assert on list length
        await expect(jsonResponse.message).toContain("User created!")
    });
    //----------------------POST 200---------------
    test('Validate Verify Login User Endpoint', async ({ request }) => {
        response = await usersRequest.verifyLogin(request);
        jsonResponse = await response.json();
        console.log(jsonResponse);
        await expect(jsonResponse.responseCode).toBe(200);
        await expect(jsonResponse.message).toEqual('User exists!');
    });
        //----------------------GET 200---------------
    test('', async ({ request }) => {
        response = await usersRequest.getUserDetailsByEmail(request);
        jsonResponse = await response.json();
        console.log(jsonResponse);
        await expect(jsonResponse.responseCode).toBe(200);
        await expect(jsonResponse.user.email).toEqual(tsData.credentials.valid.email);
    });
});