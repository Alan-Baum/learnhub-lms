import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import {
  Card,
  CardContent,
  Container,
  Button,
  Typography,
} from "@mui/material";

import { getCourses } from "../services/courseService";

function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourses().then((data) => {
      const foundCourse = data.find((course) => course.id === Number(courseId));

      setCourse(foundCourse);
    });
  }, [courseId]);

  if (!course) {
    return (
      <Container
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {course.title}
          </Typography>

          <Typography variant="body1" sx={{ mt: 3 }}>
            {course.description}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Teacher: {course.teacher_name}
          </Typography>

          <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
            You are enrolled in this course.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CourseDetailPage;
