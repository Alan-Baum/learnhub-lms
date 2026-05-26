import { useEffect, useState } from "react";

import { Box, Container, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";

import { getCourses } from "../services/courseService";
import { getEnrollments } from "../services/enrollmentService";

function HomePage() {
  const [courses, setCourses] = useState([]);

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    getCourses()
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error(error);
      });

    getEnrollments()
      .then((data) => {
        setEnrollments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Courses
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {courses.map((course) => {
          const isEnrolled = enrollments.some(
            (enrollment) => enrollment.course === course.id,
          );

          return (
            <Box
              key={course.id}
              sx={{
                width: "100%",
                maxWidth: 900,
              }}
            >
              <CourseCard
                course={course}
                isEnrolled={isEnrolled}
                onEnroll={() => {
                  setEnrollments([
                    ...enrollments,
                    {
                      id: Date.now(),
                      course: course.id,
                    },
                  ]);
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default HomePage;
