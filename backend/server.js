import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import nodemon from 'nodemon';
import { generateAuthToken, verifyAuthToken } from './tokenUtils/token.js';
import {DonorCreation, DonorLogin} from './api/auth.js';
import { QueryStore } from './api/query.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/createdonor', async (req, res) => {
    try {
        const { email, password, phone, fullname } = req.body;
        const token = await generateAuthToken(email); 
        console.log(token);
        const creationofDonor = await DonorCreation(email, password, phone, fullname);
        res.status(200).send({ donor: creationofDonor, cookietoken: token });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/logtheuserin', async (req, res) => {
    try {
        const {email,password} = req.query;
        const token = generateAuthToken(email);
        const gettingdonor = await DonorLogin(email, password);
        if (gettingdonor) {
            res.status(200).send({donorlogged: gettingdonor, cookietoken:token});
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/storequery', async (req, res) => {
    try {
        const {email, query} = req.body;
        const storedQuery = await QueryStore(email, query);
    } catch (error) {
        console.log(error);
    }
})


app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})