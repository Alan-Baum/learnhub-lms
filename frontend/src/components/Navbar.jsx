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
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          py: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          LearnHub LMS
        </Typography>

        <Box>
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
