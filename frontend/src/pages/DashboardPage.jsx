import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import { getCurrentUser } from "../services/userService";
import { getEnrollments } from "../services/enrollmentService";
import { getCourses, deleteCourse } from "../services/courseService";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [teacherCourses, setTeacherCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);

      setTeacherCourses(
        teacherCourses.filter((course) => course.id !== courseId),
      );
    } catch (error) {
      console.error(error);
      alert("Course deletion failed");
    }
  };

  if (loading) {
    return (
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h5">Loading dashboard...</Typography>
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
      <Typography variant="h3">
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
                  <Typography variant="h5" gutterBottom>
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

                  {teacherCourses.map((course) => (
                    <Card key={course.id} sx={{ mt: 2 }}>
                      <CardContent>
                        <Typography variant="h6">{course.title}</Typography>

                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {course.description}
                        </Typography>

                        <Button
                          variant="contained"
                          sx={{
                            mt: 2,
                            mr: { xs: 0, sm: 2 },
                            mb: { xs: 2, sm: 0 },
                            width: { xs: "100%", sm: "auto" },
                          }}
                          onClick={() => navigate(`/edit-course/${course.id}`)}
                        >
                          Edit Course
                        </Button>

                        <Button
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
                  ))}
                </CardContent>
              </Card>
            </Box>
          )}

          {user.role === "student" && (
            <Box sx={{ mt: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
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
                          <Typography variant="h6">
                            {enrollment.course_title}
                          </Typography>

                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Enrolled and ready to continue learning.
                          </Typography>

                          <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={() =>
                              navigate(`/course/${enrollment.course}`)
                            }
                          >
                            Continue Learning
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
    </Container>
  );
}

export default DashboardPage;
