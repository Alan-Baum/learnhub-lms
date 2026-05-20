import {
  Container,
  Typography,
} from '@mui/material';


function DashboardPage() {
  return (
    <Container sx={{ mt: 6 }}>

      <Typography variant="h3">
        Dashboard
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Welcome to your dashboard.
      </Typography>

    </Container>
  );
}

export default DashboardPage;