from django.db import migrations
from django.contrib.auth.hashers import make_password


def create_admin_user(apps, schema_editor):
    User = apps.get_model("users", "CustomUser")

    admin, _ = User.objects.get_or_create(
        username="admin1",
        defaults={
            "email": "admin@example.com",
            "role": "admin",
            "is_staff": True,
            "is_superuser": True,
        },
    )

    admin.password = make_password("password123")
    admin.role = "admin"
    admin.email = "admin@example.com"
    admin.is_staff = True
    admin.is_superuser = True
    admin.save()


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_reset_demo_passwords"),
    ]

    operations = [
        migrations.RunPython(create_admin_user),
    ]