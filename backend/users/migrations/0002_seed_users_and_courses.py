from django.db import migrations


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
    teacher.set_password("password123")
    teacher.save()

    student, _ = User.objects.get_or_create(
        username="student1",
        defaults={
            "email": "student@example.com",
            "role": "student",
        },
    )
    student.set_password("password123")
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


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
        ("courses", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_users_and_courses),
    ]