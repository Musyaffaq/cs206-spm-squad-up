import React from "react";
import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterComponent from "../Components/RegisterComponent";

function SignUp() {
  return <RegisterComponent />;
}

export default SignUp;
