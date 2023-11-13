// Import send-request to DRY out 
import sendRequest from './send-request';
// Base path of Express route
const BASE_URL = '/api/users';

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    console.log('check api')
    return sendRequest(`${BASE_URL}/check-token`);
}