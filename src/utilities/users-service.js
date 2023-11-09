import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegrate network request code to users-api.js, which returns a JWT
    const token = await usersAPI.signUp(userData);
    return token;
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    return token;    
}