const ENROLLMENTS_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/enrollments/";

export async function getEnrollments() {
  const token = localStorage.getItem("token");

  const response = await fetch(ENROLLMENTS_URL, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch enrollments");
  }

  return response.json();
}

export async function createEnrollment(courseId) {
  const token = localStorage.getItem("token");

  const response = await fetch(ENROLLMENTS_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },

    body: JSON.stringify({
      course: courseId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create enrollment");
  }

  return response.json();
}
