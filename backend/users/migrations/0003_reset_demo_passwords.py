from django.db import migrations
from django.contrib.auth.hashers import make_password


def reset_demo_passwords(apps, schema_editor):
    User = apps.get_model("users", "CustomUser")

    teacher = User.objects.get(username="teacher1")
    teacher.password = make_password("password123")
    teacher.role = "teacher"
    teacher.save()

    student = User.objects.get(username="student1")
    student.password = make_password("password123")
    student.role = "student"
    student.save()


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_seed_users_and_courses"),
    ]

    operations = [
        migrations.RunPython(reset_demo_passwords),
    ]