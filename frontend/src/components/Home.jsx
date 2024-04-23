/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Input,
  Button,
  VStack,
  Center,
  Heading,
  Box
} from '@chakra-ui/react';
import axios from 'axios';

const Home = () => {
  const [donorData, setDonorData] = useState({
    email: '',
    password: '',
    phone: '',
    fullname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    try {
      const storingDonorData = axios.post('http://localhost:5000/createdonor', {
        email: donorData.email,
        password: donorData.password,
        phone: donorData.phone,
        fullname: donorData.fullname,
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      bgGradient="linear(to-br, teal.200, purple.500)"
      w="100%"
      h="100vh"
    >
      <Center h="100%">
        <VStack spacing={4} align="center">
          <Heading as="h1" size="xl" mb={8} color="white">Register as a Donor</Heading>
          <Input
            width="auto"
            placeholder="Email Address"
            backgroundColor="white"
            name="email"
            value={donorData.email}
            onChange={handleChange}
          />
          <Input
            width="auto"
            type="password"
            placeholder="Password"
            backgroundColor="white"
            name="password"
            value={donorData.password}
            onChange={handleChange}
          />
          <Input
            width="auto"
            placeholder="Phone Number"
            backgroundColor="white"
            name="phone"
            value={donorData.phone}
            onChange={handleChange}
          />
          <Input
            width="auto"
            placeholder="Full Name"
            backgroundColor="white"
            name="fullname"
            value={donorData.fullname}
            onChange={handleChange}
          />
          <Button colorScheme="blue" onClick={handleSubmit}>Register</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;
