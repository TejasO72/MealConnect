/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Link,
    Container,
    Grid
} from "@mui/material";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const NGORegistration = () => {
    const [ngoData, setNgoData] = useState({
        email: '',
        phone: '',
        name: '',
        password: '',
        established_date: '',
        location: '',
        ngo_id: '',
        websiteurl: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNgoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
      
        const response = await axios.post('http://localhost:5000/ngo/register', ngoData);
        navigate("/landing");
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                NGO Registration
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={ngoData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={ngoData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={ngoData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={ngoData.password}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Established Date"
                            type="date"
                            name="established_date"
                            value={ngoData.established_date}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Location"
                            name="location"
                            value={ngoData.location}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="NGO ID"
                            name="ngo_id"
                            value={ngoData.ngo_id}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Website URL"
                            name="websiteurl"
                            value={ngoData.websiteurl}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
            <Typography variant="body2" align="center" mt={2}>
                Donor? <Link href='/'>Click here to register as a donor</Link>
            </Typography>
            <Typography variant="body2" align="center" mt={2}>
                Already NGO registered? <Link href='/ngologin'>Login as NGO</Link>
            </Typography>
        </Container>
    );
};

export default NGORegistration;
