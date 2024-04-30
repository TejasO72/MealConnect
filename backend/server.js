import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import nodemon from 'nodemon';
import { generateAuthToken, verifyAuthToken } from './tokenUtils/token.js';
import {DonorCreation, DonorLogin, NGOCreation, NGOlogin} from './api/auth.js';
import { QueryStore } from './api/query.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/createdonor', async (req, res) => {
    try {
        const { email, password, phone, fullname } = req.body;
        const token = await generateAuthToken(email); 
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
        const token = await generateAuthToken(email);
        
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

app.post('/ngo/register', async (req, res) => {
    try {
     
        const {email, name, phone, password, established_date, location, websiteurl, ngo_id} = req.body;
        const registeredNGO = await NGOCreation(email, name, phone, password, established_date, location, websiteurl, ngo_id);
    } catch (error) {
        console.log(error);
    }
})

app.get('/ngologin', async (req, res) => {
    try {
        const {email, password, ngo_id} = req.query;
        const loggedinNGO = await NGOlogin(email, password, ngo_id);
        res.send(loggedinNGO)
    } catch (error) {
        console.log(error);
    }
})


app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})