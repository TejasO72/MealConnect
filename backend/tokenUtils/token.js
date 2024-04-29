// tokenUtils.js

import jwt from 'jsonwebtoken';

const secretKey = 'niggachiggaDYmealconnect'; // Replace with your actual secret key

const generateAuthToken = async (email) => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
    const payload = {
        email: email,
        random: randomNumber,
    };
    return jwt.sign(payload, secretKey);
};


const verifyAuthToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded.email; // Return the email from the decoded token
    } catch (error) {
        return null; // Token verification failed
    }
};

export { generateAuthToken, verifyAuthToken };
