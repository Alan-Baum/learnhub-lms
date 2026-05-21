const ENROLLMENTS_URL = 'http://127.0.0.1:8000/api/enrollments/';


export async function getEnrollments() {
  const token = localStorage.getItem('token');

  const response = await fetch(ENROLLMENTS_URL, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch enrollments');
  }

  return response.json();
}