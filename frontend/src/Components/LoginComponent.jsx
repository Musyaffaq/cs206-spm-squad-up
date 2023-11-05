import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import API_LINK from "../Api";

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

    fetch(API_LINK + `login`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("userid", result.userid);
        sessionStorage.setItem("personality", response.data.personality);
      })
      .then(() => {
        navigate("/");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
            type="submit" 
            variant="contained"
            color="primary"
            fullWidth
          >
            Log In
          </Button>
          <br />
          <br />
          <Link to="/signup">
            <Button variant="contained" fullWidth>
              Register Page
            </Button>
          </Link>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginComponent;
