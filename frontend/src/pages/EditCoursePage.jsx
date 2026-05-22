import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { getCourses, updateCourse } from "../services/courseService";

function EditCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      alert("Please enter a title and description.");
      return;
    }

    try {
      await updateCourse(courseId, title, description);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Course update failed");
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
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
}

export default EditCoursePage;
