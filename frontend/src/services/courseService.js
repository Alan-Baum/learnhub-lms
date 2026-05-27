const COURSES_URL =
  "https://learnhub-lms-production-985e.up.railway.app/api/courses/";
export async function getCourses() {
  const response = await fetch(COURSES_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
}

export async function createCourse(title, description) {
  const token = localStorage.getItem("token");

  const response = await fetch(COURSES_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },

    body: JSON.stringify({
      title,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create course");
  }

  return response.json();
}
export async function deleteCourse(courseId) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${COURSES_URL}${courseId}/`, {
    method: "DELETE",

    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete course");
  }
}

export async function updateCourse(courseId, title, description) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${COURSES_URL}${courseId}/`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },

    body: JSON.stringify({
      title,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update course");
  }

  return response.json();
}
