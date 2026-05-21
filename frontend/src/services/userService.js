const CURRENT_USER_URL = 'http://127.0.0.1:8000/api/current-user/';


export async function getCurrentUser() {
  const token = localStorage.getItem('token');

  const response = await fetch(CURRENT_USER_URL, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch current user');
  }

  return response.json();
}