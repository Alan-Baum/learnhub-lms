from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Enrollment
from .serializers import EnrollmentSerializer


class EnrollmentViewSet(viewsets.ModelViewSet):
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Enrollment.objects.filter(
            student=self.request.user
        ).order_by('-enrolled_at')

    def perform_create(self, serializer):
        serializer.save(
            student=self.request.user
        )