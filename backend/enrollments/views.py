from rest_framework import viewsets
from .models import Enrollment
from .serializers import EnrollmentSerializer


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all().order_by('-enrolled_at')
    serializer_class = EnrollmentSerializer
