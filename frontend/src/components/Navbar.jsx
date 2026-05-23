import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          LearnHub LMS
        </Typography>

        <Box sx={{ ml: "auto" }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
