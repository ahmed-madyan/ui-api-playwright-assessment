import url from "../../utils/urls";
import signUpData from '../../../test-data/sign_up';
import usersData from '../../../test-data/test-users';
//=======================Variables=============================
let email: string;
//==========================Endpoints==========================
const baseUrl = url.test.api;
const createAccountEndpoint = 'api/createAccount';
const verifyLoginEndpoint = 'api/verifyLogin';
const getUserDetailsByEmailEndpoint = 'api/getUserDetailByEmail';
//==========================Requests Objects===================
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
//==========================Requests===========================
//--------------------------post 201---------------------------
async function createUser(request: any) {

    const response = await request.post(createAccountEndpoint, {
        form: createAccount_requestPayload,
        Headers: requestHeaders
    });
    return response;
}
//-----------------------Get with param 200--------------------
async function verifyLogin(request: any) {
    // const response = await request.get(baseUrl+usersEndpoint,{
    //     params: userParam
    // });
    const response = await request.post(verifyLoginEndpoint, {
        form: verifyLogin_Param,
        Headers: requestHeaders
        // params: verifyLogin_Param
    });
    return response;
}
//-----------------------Get with param 200--------------------
async function getUserDetailsByEmail(request: any) {
    // const response = await request.get(baseUrl+usersEndpoint,{
    //     params: userParam
    // });
    const response = await request.get(getUserDetailsByEmailEndpoint, {
        params: getUserDetailByEmail_Param
    });
    return response;
}
//==========================Exports============================
export default { verifyLogin, createUser, getUserDetailsByEmail };