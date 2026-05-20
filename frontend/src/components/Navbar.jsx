import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';


function Navbar() {
  return (
    <AppBar position="static">

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          LearnHub LMS
        </Typography>

        <Button color="inherit">
          Courses
        </Button>

        <Button color="inherit">
          Login
        </Button>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;