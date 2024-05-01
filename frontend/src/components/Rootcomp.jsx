/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Container,
  Grid
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Rootcomp = () => {
  const [donorData, setDonorData] = useState({
    email: "",
    password: "",
    phone: "",
    fullname: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("usertoken")) {
      navigate("/landing");
    }
  
  }, [navigate])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const storingDonorData = await axios.post(
        "http://localhost:5000/createdonor",
        {
          email: donorData.email,
          password: donorData.password,
          phone: donorData.phone,
          fullname: donorData.fullname
        }
      );

      Cookies.set("usertoken", storingDonorData.data.cookietoken, {
        expires: 7,
        secure: true
      });

      navigate("/landing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#7C4DFF"
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "24px"
          }}
        >
          <Typography variant="h4" align="center" mb={4}>
            Register as a Donor
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            name="email"
            value={donorData.email}
            onChange={handleChange}
            mb={2}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={donorData.password}
            onChange={handleChange}
            mb={2}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Phone Number"
            name="phone"
            value={donorData.phone}
            onChange={handleChange}
            mb={2}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            name="fullname"
            value={donorData.fullname}
            onChange={handleChange}
            mb={2}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            mb={2}
          >
            Register
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link href="/login" underline="hover">
                  Login
                </Link>
              </Typography>
              <Typography variant="body2">
                An NGO ?
                <Link href="/ngoreg" underline="hover">
                  Register as an NGO
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Rootcomp;
