from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.views import UserViewSet, current_user
from courses.views import CourseViewSet
from enrollments.views import EnrollmentViewSet
from rest_framework.authtoken.views import obtain_auth_token


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'courses', CourseViewSet)
router.register(
    r'enrollments',
    EnrollmentViewSet,
    basename='enrollment'
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', obtain_auth_token),
    path('api/current-user/', current_user),
    path('api/', include(router.urls)),
]