import React from "react";
import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        data,
        {
          headers,
        }
      );

      setUsername("");
      setPassword("");

      // Successful login
      console.log("Successfully Created Account!");
      console.log(response.data);
      handleClick();

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
          Sign Up
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
            Create Account
          </Button>
          <br />
          <br />
          <Link to="/login">
            <Button variant="contained" fullWidth>
              Log In Page
            </Button>
          </Link>
        </form>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Account Successfully Created! You can login now!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default RegisterComponent;
