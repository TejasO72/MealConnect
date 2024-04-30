import jwt from 'jsonwebtoken';

const secretKey = 'miniprojectDYmealconnect'; // Replace with your actual secret key

const generateAuthToken = async (email) => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
    const payload = {
        email: email,
        random: randomNumber,
    };
    const token = await jwt.sign(payload, secretKey); // Await jwt.sign to get the token value
    return token;
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
