import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import nodemon from 'nodemon';


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})