import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';


function CourseCard({ course }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {course.description}
        </Typography>

        <Typography variant="subtitle2">
          Teacher: {course.teacher_name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;