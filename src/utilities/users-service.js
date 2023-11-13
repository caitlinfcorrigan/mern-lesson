import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegrate network request code to users-api.js, which returns a JWT
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token)
    return getUser();
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return token;    
}

// Check for a valid token (which influence user State)
export function getToken() {
    const token = localStorage.getItem('token');
    // If no token, return null so user signs up/ logs in
    if (!token) return null;
    // If there is, parse it
    const payload = JSON.parse(atob(token.split('.')[1]));
    // Check whether the token expired
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    // Return a valid token
    return token;
}

// If there's a token, return the user in the payload
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// Log out (delete token)
export function logOut() {
    localStorage.removeItem('token');
}

// Allow user to check token expiration
export function checkToken() {
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}