/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Typography, Container, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QR from '../assets/QrCode.jpeg'

const DonateMoney = () => {
    const navigate = useNavigate();
    function redirectlanding(){
        navigate('/landing')
    }
    return (
        <Container maxWidth="md">
            <Box mt={4} textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Donate for a Good Cause
                </Typography>
                <Typography variant="body1" paragraph>
                    Your donation can make a significant impact on the lives of those in need.
                    Every contribution helps provide food to the hungry and supports vital
                    community programs.
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <img src={QR} alt="qrcode" height={50} width={300}/>
                    </Grid>
                </Grid>
                <button onClick={redirectlanding}>Go to Homepage</button>
            </Box>
        </Container>
    );
};

export default DonateMoney;
