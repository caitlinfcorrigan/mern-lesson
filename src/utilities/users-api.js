// Base path of Express route
const BASE_URL = '/api/users';

export async function signUp(userData) {
    // Fetch uses an options obj as a 2nd arg to make requests other than GET, include data, etc.
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        // Fetch requires stringified payloads assigned to the body prop of the options obj
        body: JSON.stringify(userData)
    });
    if (res.ok) {
        // res.json() resolves to JWT
        return res.json()
    } else {
        throw new Error('Invalid Sign Up');
    }
}