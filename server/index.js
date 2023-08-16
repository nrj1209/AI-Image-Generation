import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v2/post', postRoutes);
app.use('/api/v2/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});



app.listen(3000, () => {
  
  console.log('Server started on port 3000')
  connectDB(process.env.MONGODB_URL);
});

