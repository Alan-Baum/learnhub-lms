import { useEffect, useState } from 'react';

import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import CourseCard from '../components/CourseCard';

import { getCourses } from '../services/courseService';


function HomePage() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    getCourses()
      .then((data) => {
        setCourses(data);
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

        {courses.map((course) => (

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={course.id}
          >

            <CourseCard course={course} />

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}

export default HomePage;