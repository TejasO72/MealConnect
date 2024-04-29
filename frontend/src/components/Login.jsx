/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Container,
  Grid
} from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/logtheuserin",
        {
          params: {
            email: loginInfo.email,
            password: loginInfo.password
          }
        }
      );

      if (response.status === 200) {
        Cookies.set("usertoken", response.cookietoken, {
          expires: 7,
          secure: true
        });
        navigate("/landing");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={loginInfo.email}
              name="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={loginInfo.password}
              name="password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: "20px" }}
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          Don't have an account?{" "}
          <Link href="/" underline="hover" color="primary">
            Register
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
