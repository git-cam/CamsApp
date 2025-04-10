//index.js
//import '.././index.css';
import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; 
import dotenv from 'dotenv';
import arduinoRoutes from './controllers/arduino.js';  // Use .js extension when importing files

dotenv.config();
app.use(cors())


const PORT = process.env.PORT || 3000;
app.use(cors());               
app.use(morgan('dev'));         
// Properly get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildPath = path.join(__dirname, '../client/build');

// Serve static files from the React build folder
app.use(express.static(buildPath));

app.use('/arduino', arduinoRoutes);    // All routes prefixed with /api

app.get('*name', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
    
app.get('/api/test', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on http://localhost:${PORT}`)
})