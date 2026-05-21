import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
} from "@mui/material";

import { getCurrentUser } from "../services/userService";

import { getEnrollments } from "../services/enrollmentService";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    getCurrentUser()
      .then((data) => {
        setUser(data);
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
      <Typography variant="h3">
        {user?.role === "student" && "Student Dashboard"}

        {user?.role === "teacher" && "Teacher Dashboard"}

        {user?.role === "admin" && "Admin Dashboard"}
      </Typography>

      {user && (
        <>
          <Typography sx={{ mt: 2 }}>Welcome, {user.username}.</Typography>

          <Typography sx={{ mt: 1 }}>Role: {user.role}</Typography>
          {user.role === "student" && (
            <Box sx={{ mt: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    My Learning
                  </Typography>

                  {enrollments.map((enrollment) => (
                    <Card key={enrollment.id} sx={{ mt: 2 }}>
                      <CardContent>
                        <Typography variant="h6">
                          {enrollment.course_title}
                        </Typography>

                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Enrolled and ready to continue learning.
                          <Button variant="contained" sx={{ mt: 2 }}>
                            Continue Learning
                          </Button>
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
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
