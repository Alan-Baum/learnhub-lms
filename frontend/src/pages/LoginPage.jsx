import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { loginUser } from "../services/authService";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const data = await loginUser(username, password);

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          aria-label="Login"
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
            Login failed
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default LoginPage;
