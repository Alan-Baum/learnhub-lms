from users.models import CustomUser
from courses.models import Course

teacher, created = CustomUser.objects.get_or_create(
    username="teacher1",
    defaults={
        "email": "teacher@example.com",
        "role": "teacher",
    }
)

teacher.set_password("password123")
teacher.save()

student, created = CustomUser.objects.get_or_create(
    username="student1",
    defaults={
        "email": "student@example.com",
        "role": "student",
    }
)

student.set_password("password123")
student.save()

Course.objects.get_or_create(
    title="Python Basics",
    defaults={
        "description": "Learn Python fundamentals.",
        "teacher": teacher,
    }
)

Course.objects.get_or_create(
    title="React Fundamentals",
    defaults={
        "description": "Introduction to React development.",
        "teacher": teacher,
    }
)

print("Seed data created successfully.")