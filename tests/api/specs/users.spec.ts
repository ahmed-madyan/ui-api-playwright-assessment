import { test, expect } from '@playwright/test';
import usersRequest from '../endpoints/users-endpoints';
import tsData from '../../../test-data/test-users';

/**
 * Test suite for Users API endpoints
 * Tests user account creation, login verification, and user details retrieval
 */
test.describe('Users API Test @api', () => {
    /**
     * Test: Create Account Endpoint
     * Validates successful user account creation with status code 201
     */
    test('Validate Create Account Endpoint', async ({ request }) => {
        const response = await usersRequest.createUser(request);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // Verify successful account creation status code
        await expect(jsonResponse.responseCode).toBe(201);
        // Verify success message confirms user creation
        await expect(jsonResponse.message).toContain("User created!");
    });

    /**
     * Test: Verify Login User Endpoint
     * Validates user login verification with status code 200
     */
    test('Validate Verify Login User Endpoint', async ({ request }) => {
        const response = await usersRequest.verifyLogin(request);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // Verify successful login verification status code
        await expect(jsonResponse.responseCode).toBe(200);
        // Verify message confirms user exists
        await expect(jsonResponse.message).toEqual('User exists!');
    });

    /**
     * Test: Get User Details By Email Endpoint
     * Validates retrieval of user details by email with status code 200
     */
    test('Validate Get User Details By Email Endpoint', async ({ request }) => {
        const response = await usersRequest.getUserDetailsByEmail(request);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // Verify successful retrieval status code
        await expect(jsonResponse.responseCode).toBe(200);
        // Verify returned email matches the requested email
        await expect(jsonResponse.user.email).toEqual(tsData.credentials.valid.email);
    });
});