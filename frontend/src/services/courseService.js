const API_URL = 'http://127.0.0.1:8000/api/courses/';


export async function getCourses() {

  const token = localStorage.getItem('token');

  const response = await fetch(API_URL, {

    headers: {
      Authorization: `Token ${token}`,
    },

  });

  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }

  return response.json();
}