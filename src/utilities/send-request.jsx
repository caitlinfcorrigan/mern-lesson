import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
    console.log("test2")
  const options = { method };
  console.log("test1")
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  console.log("test")
  const token = getToken();
  if (token) {
    // Add an Authorization header
    // options.headers ||= {};
    // Older approach
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  console.log(res)
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}