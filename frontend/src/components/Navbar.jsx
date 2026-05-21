import { useEffect, useState } from "react";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LearnHub LMS
        </Typography>

        <Button color="inherit" href="/">
          Courses
        </Button>

        {isLoggedIn ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" href="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
