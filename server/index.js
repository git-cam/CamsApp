//index.js
//import '.././index.css';
const express = require('express');
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import arduinoRoutes from './controllers/arduino.js';  // Importing routes

dotenv.config();
app.use(cors())


const PORT = process.env.PORT || 3000;
app.use(cors());               
app.use(morgan('dev'));         

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/arduino', arduinoRoutes);    // All routes prefixed with /api

app.get('*name', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
    
app.get('/api/test', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
})