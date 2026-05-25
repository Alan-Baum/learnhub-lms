import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { getCourses, updateCourse } from "../services/courseService";

function EditCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCourses()
      .then((courses) => {
        const selectedCourse = courses.find(
          (course) => course.id === Number(courseId),
        );

        if (selectedCourse) {
          setTitle(selectedCourse.title);
          setDescription(selectedCourse.description);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);

  const handleUpdateCourse = async () => {
    if (!title || !description) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please enter a title and description.");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      await updateCourse(courseId, title, description);

      setSnackbarSeverity("success");
      setSnackbarMessage("Course updated successfully.");
      setOpenSnackbar(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1200);
    } catch (error) {
      console.error(error);

      setLoading(false);
      setSnackbarSeverity("error");
      setSnackbarMessage("Course update failed.");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Edit Course
        </Typography>

        <TextField
          label="Course Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Course Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleUpdateCourse}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            severity={snackbarSeverity}
            onClose={() => setOpenSnackbar(false)}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default EditCoursePage;
