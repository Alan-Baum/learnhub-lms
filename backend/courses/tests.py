from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token

from .models import Course


class CourseAPITests(APITestCase):
    def setUp(self):
        User = get_user_model()

        self.teacher = User.objects.create_user(
            username="testteacher",
            password="password123",
            role="teacher",
        )

        self.token = Token.objects.create(user=self.teacher)

        self.course = Course.objects.create(
            title="Test Course",
            description="Test course description.",
            teacher=self.teacher,
        )

    def test_course_list_returns_courses(self):
        response = self.client.get("/api/courses/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["title"], "Test Course")

    def test_authenticated_teacher_can_create_course(self):
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {self.token.key}")

        response = self.client.post(
            "/api/courses/",
            {
                "title": "New Test Course",
                "description": "Created during automated testing.",
            },
            format="json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["title"], "New Test Course")
