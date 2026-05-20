import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';


function Navbar() {

  const isLoggedIn = localStorage.getItem('token');


  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out');
    window.location.href = '/';
  };


  return (
    <AppBar position="static">

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          LearnHub LMS
        </Typography>

        <Button
          color="inherit"
          href="/"
        >
          Courses
        </Button>

        {isLoggedIn ? (
          <Button
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            href="/login"
          >
            Login
          </Button>
        )}

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;