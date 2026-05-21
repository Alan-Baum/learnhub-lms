import { useEffect, useState } from 'react';

import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import CourseCard from '../components/CourseCard';

import { getCourses } from '../services/courseService';
import { getEnrollments } from '../services/enrollmentService';


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
    <Container sx={{ mt: 6 }}>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
      >
        Available Courses
      </Typography>

      <Grid container spacing={3}>

        {courses.map((course) => {

          const isEnrolled = enrollments.some(
            (enrollment) =>
              enrollment.course === course.id
          );


          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={course.id}
            >

              <CourseCard
                course={course}
                isEnrolled={isEnrolled}
              />

            </Grid>
          );

        })}

      </Grid>

    </Container>
  );
}

export default HomePage;