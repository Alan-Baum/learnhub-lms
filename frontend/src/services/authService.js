const LOGIN_URL = 'http://127.0.0.1:8000/api/login/';


export async function loginUser(username, password) {

  const response = await fetch(LOGIN_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}