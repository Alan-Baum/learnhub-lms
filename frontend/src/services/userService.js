const USERS_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/users/";

const CURRENT_USER_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/current-user/";

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

export async function getUsers() {
  const token = localStorage.getItem("token");

  const response = await fetch(USERS_URL, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
