import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Typography,
} from "@mui/material";

import { getCurrentUser } from "../services/userService";
import {
  getEnrollments,
  deleteEnrollment,
} from "../services/enrollmentService";
import { getCourses, deleteCourse } from "../services/courseService";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [teacherCourses, setTeacherCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([getCurrentUser(), getEnrollments(), getCourses()])
      .then(([userData, enrollmentData, courseData]) => {
        setUser(userData);
        setEnrollments(enrollmentData);

        const teacherOwnedCourses = courseData.filter(
          (course) => course.teacher_name === userData.username,
        );

        setTeacherCourses(teacherOwnedCourses);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteCourse = async () => {
    try {
      await deleteCourse(selectedCourseId);

      setTeacherCourses(
        teacherCourses.filter((course) => course.id !== selectedCourseId),
      );

      setSnackbarSeverity("success");
      setSnackbarMessage("Course deleted successfully.");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);

      setSnackbarSeverity("error");
      setSnackbarMessage("Course deletion failed.");
      setOpenSnackbar(true);
    } finally {
      setDeleteDialogOpen(false);
      setSelectedCourseId(null);
    }
  };

  const handleUnenroll = async (enrollmentId) => {
    try {
      await deleteEnrollment(enrollmentId);

      setEnrollments(
        enrollments.filter((enrollment) => enrollment.id !== enrollmentId),
      );

      setSnackbarSeverity("success");
      setSnackbarMessage("Successfully unenrolled.");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);

      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to unenroll.");
      setOpenSnackbar(true);
    }
  };

  if (loading) {
    return (
      <Container
        maxWidth="md"
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
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Typography variant="h4" component="h1">
        {user?.role === "student" && "Student Dashboard"}
        {user?.role === "teacher" && "Teacher Dashboard"}
        {user?.role === "admin" && "Admin Dashboard"}
      </Typography>

      {user && (
        <>
          <Typography sx={{ mt: 2 }}>Welcome, {user.username}.</Typography>

          <Typography sx={{ mt: 1 }}>Role: {user.role}</Typography>

          {user.role === "teacher" && (
            <Box sx={{ mt: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Teacher Tools
                  </Typography>

                  <Typography>
                    Manage your courses and create new learning content.
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/create-course")}
                  >
                    Create Course
                  </Button>

                  {teacherCourses.length === 0 ? (
                    <Typography sx={{ mt: 3 }}>
                      You have not created any courses yet.
                    </Typography>
                  ) : (
                    teacherCourses.map((course) => (
                      <Card key={course.id} sx={{ mt: 2 }}>
                        <CardContent>
                          <Typography variant="h6" component="h3">
                            {course.title}
                          </Typography>

                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {course.description}
                          </Typography>

                          <Button
                            aria-label="Edit course"
                            variant="contained"
                            sx={{
                              mt: 2,
                              mr: { xs: 0, sm: 2 },
                              mb: { xs: 2, sm: 0 },
                              width: { xs: "100%", sm: "auto" },
                            }}
                            onClick={() =>
                              navigate(`/edit-course/${course.id}`)
                            }
                          >
                            Edit Course
                          </Button>

                          <Button
                            aria-label="Delete course"
                            variant="contained"
                            color="error"
                            sx={{
                              mt: 2,
                              width: { xs: "100%", sm: "auto" },
                            }}
                            onClick={() => handleDeleteCourse(course.id)}
                          >
                            Delete Course
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </CardContent>
              </Card>
            </Box>
          )}

          {user.role === "student" && (
            <Box sx={{ mt: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    My Learning
                  </Typography>

                  {enrollments.length === 0 ? (
                    <Typography sx={{ mt: 2 }}>
                      You are not enrolled in any courses yet.
                    </Typography>
                  ) : (
                    enrollments.map((enrollment) => (
                      <Card key={enrollment.id} sx={{ mt: 2 }}>
                        <CardContent>
                          <Typography variant="h6" component="h3">
                            {enrollment.course_title}
                          </Typography>

                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Enrolled and ready to continue learning.
                          </Typography>

                          <Button
                            aria-label="Continue learning"
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={() =>
                              navigate(`/course/${enrollment.course}`)
                            }
                          >
                            Continue Learning
                          </Button>

                          <Button
                            aria-label="Unenroll from course"
                            variant="outlined"
                            color="error"
                            sx={{
                              mt: 2,
                              ml: { xs: 0, sm: 2 },
                              width: { xs: "100%", sm: "auto" },
                            }}
                            onClick={() => handleUnenroll(enrollment.id)}
                          >
                            Unenroll
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </CardContent>
              </Card>
            </Box>
          )}
        </>
      )}

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Course</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this course?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            aria-label="Cancel delete"
            onClick={() => setDeleteDialogOpen(false)}
          >
            Cancel
          </Button>

          <Button
            aria-label="Confirm delete"
            color="error"
            variant="contained"
            onClick={confirmDeleteCourse}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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
    </Container>
  );
}

export default DashboardPage;
