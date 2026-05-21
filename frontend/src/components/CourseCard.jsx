import {
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import { createEnrollment } from '../services/enrollmentService';


function CourseCard({
  course,
  isEnrolled,
  onEnroll,
}) {

  const handleEnroll = async () => {
    try {
      await createEnrollment(course.id);
      onEnroll();
    } catch (error) {
      console.error(error);
      alert('Enrollment failed');
    }
  };


  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {course.description}
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Teacher: {course.teacher_name}
        </Typography>

        <Button
          variant="contained"
          onClick={handleEnroll}
          disabled={isEnrolled}
        >

          {isEnrolled
            ? 'Enrolled'
            : 'Enroll'}

        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseCard;