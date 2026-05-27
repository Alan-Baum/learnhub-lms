const COURSES_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/courses/";

export async function getCurrentUser() {
  const token = localStorage.getItem("token");

  const response = await fetch(CURRENT_USER_URL, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user");
  }

  return response.json();
}
