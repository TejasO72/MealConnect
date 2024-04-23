import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import nodemon from 'nodemon';
import {DonorCreation} from './api/auth.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/createdonor', async (req, res) => {
    try {
        const { email, password, phone, fullname } = req.body;
        const creationofDonor = await DonorCreation(email, password, phone, fullname);
        res.send(creationofDonor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});






app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})