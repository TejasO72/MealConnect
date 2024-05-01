/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    Grid
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const NGOLogin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        ngo_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/ngologin', {
                params: {
                    email: loginData.email,
                    password: loginData.password,
                    ngo_id: loginData.ngo_id
                }
            });

            navigate("/landing")
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Typography variant="h5" component="h2" align="center">
                    NGO Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="NGO ID"
                                name="ngo_id"
                                value={loginData.ngo_id}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default NGOLogin;
