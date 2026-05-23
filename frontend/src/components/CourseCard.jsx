import { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";

import { createEnrollment } from "../services/enrollmentService";

function CourseCard({ course, isEnrolled, onEnroll }) {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleEnroll = async () => {
    try {
      await createEnrollment(course.id);
      onEnroll();
      setMessage("Enrollment successful");
      setSeverity("success");
    } catch (error) {
      console.error(error);
      setMessage(
        "Enrollment failed. You may already be enrolled in this course.",
      );
      setSeverity("error");
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
          {isEnrolled ? "Enrolled" : "Enroll"}
        </Button>

        <Snackbar
          open={Boolean(message)}
          autoHideDuration={3000}
          onClose={() => setMessage("")}
        >
          <Alert severity={severity} onClose={() => setMessage("")}>
            {message}
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
