import { useState } from 'react';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import { loginUser } from '../services/authService';

import { useNavigate } from 'react-router-dom';


function LoginPage() {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleLogin = async () => {

    try {

      const data = await loginUser(
        username,
        password
      );

      localStorage.setItem(
        'token',
        data.token
      );
      
      navigate('/dashboard');

    } catch (error) {

      console.error(error);

      alert('Login failed');

    }
  };


  return (
    <Container maxWidth="sm">

      <Box sx={{ mt: 8 }}>

        <Typography
          variant="h4"
          gutterBottom
        >
          Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>

      </Box>

    </Container>
  );
}

export default LoginPage;