import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';

const app = express();

dotenv.config();


// BodyParser Middleware
app.use(express.json());

// Routes
app.use('/user', userRoutes);

// Server Port
const PORT = process.env.PORT || 5000

// Connect to Mongodb
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false);