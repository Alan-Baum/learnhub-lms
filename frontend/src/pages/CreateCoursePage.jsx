import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { createCourse } from "../services/courseService";

function CreateCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateCourse = async () => {
    if (!title || !description) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please enter a title and description.");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      await createCourse(title, description);

      setSnackbarSeverity("success");
      setSnackbarMessage("Course created successfully.");
      setOpenSnackbar(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1200);
    } catch (error) {
      console.error(error);

      setLoading(false);
      setSnackbarSeverity("error");
      setSnackbarMessage("Course creation failed.");
      setOpenSnackbar(true);
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
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Course"}
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

export default CreateCoursePage;
