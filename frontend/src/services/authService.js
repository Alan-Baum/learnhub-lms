const COURSES_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/courses/";

const LOGIN_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/token/";

export async function loginUser(username, password) {
  const response = await fetch(LOGIN_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}
