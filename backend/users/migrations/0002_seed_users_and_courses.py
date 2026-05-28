from django.db import migrations
from django.contrib.auth.hashers import make_password

def seed_users_and_courses(apps, schema_editor):
    User = apps.get_model("users", "CustomUser")
    Course = apps.get_model("courses", "Course")

    teacher, _ = User.objects.get_or_create(
        username="teacher1",
        defaults={
            "email": "teacher@example.com",
            "role": "teacher",
        },
    )
    teacher.password = make_password("password123")
    teacher.save()

    student, _ = User.objects.get_or_create(
        username="student1",
        defaults={
            "email": "student@example.com",
            "role": "student",
        },
    )
    student.password = make_password("password123")
    student.save()

    Course.objects.get_or_create(
        title="Python Basics",
        defaults={
            "description": "Learn Python fundamentals.",
            "teacher": teacher,
        },
    )

    Course.objects.get_or_create(
        title="React Fundamentals",
        defaults={
            "description": "Introduction to React development.",
            "teacher": teacher,
        },
    )

        Course.objects.get_or_create(
        title="JavaScript Essentials",
        defaults={
            "description": "Learn core JavaScript concepts including variables, functions, arrays, objects, and DOM interaction.",
            "teacher": teacher,
        },
    )

    Course.objects.get_or_create(
        title="Database Fundamentals",
        defaults={
            "description": "Understand relational databases, SQL queries, normalization, and data modelling concepts.",
            "teacher": teacher,
        },
    )

    Course.objects.get_or_create(
        title="Advanced React",
        defaults={
            "description": "Build modern React applications using hooks, routing, state management, and reusable components.",
            "teacher": teacher,
        },
    )

    Course.objects.get_or_create(
        title="Django REST APIs",
        defaults={
            "description": "Learn how to build secure RESTful APIs using Django REST Framework and token authentication.",
            "teacher": teacher,
        },
    )

class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
        ("courses", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_users_and_courses),
    ]