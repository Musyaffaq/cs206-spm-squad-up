import React from "react";
import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post("http://localhost:5000/login", data, {
        headers,
      });

      // Successful login
      console.log(response.data.token);
      sessionStorage.setItem("token", response.data.token);
      navigate("/");

      // Redirect or perform other actions as needed.
    } catch (error) {
      // Handle login error
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginComponent;
