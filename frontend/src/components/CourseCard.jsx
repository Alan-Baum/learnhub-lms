import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleEnroll = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (isEnrolled) {
      return;
    }

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
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 1,
            minHeight: 40,
          }}
        >
          {course.description}
        </Typography>

        <Typography variant="subtitle2" component="p" sx={{ mb: 2 }}>
          Teacher: {course.teacher_name}
        </Typography>

        {!isLoggedIn && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Login to enroll in this course.
          </Typography>
        )}

        <Button
          variant="contained"
          color={isEnrolled ? "success" : "primary"}
          onClick={handleEnroll}
          disabled={false}
          sx={{
            width: "100%",
            maxWidth: 220,
            opacity: 1,
            cursor: isEnrolled ? "default" : "pointer",
          }}
        >
          {isEnrolled ? "Enrolled" : isLoggedIn ? "Enroll" : "Login"}
        </Button>

        <Snackbar
          open={Boolean(message)}
          autoHideDuration={3000}
          onClose={() => setMessage("")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
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
