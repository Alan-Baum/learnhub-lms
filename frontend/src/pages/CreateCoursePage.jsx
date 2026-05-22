import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { createCourse } from "../services/courseService";

function CreateCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleCreateCourse = async () => {
    if (!title || !description) {
      alert("Please enter a title and description.");
      return;
    }
    try {
      await createCourse(title, description);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Course creation failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Create Course
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
          onClick={handleCreateCourse}
        >
          Create Course
        </Button>
      </Box>
    </Container>
  );
}

export default CreateCoursePage;
