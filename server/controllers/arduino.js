import express from 'express';
const router = express.Router();

// Define a simple API route
router.get('/test', (req, res) => {
  res.send('Hello from our server!');
});

export default router;