import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Enable CORS for specific origin
app.use(cors({
    origin: 'https://web-builder-bangladesh-frontend.vercel.app', origin:'https://web-builder-bangladesh-frontend.vercel.app/login',
    credentials: true, // Allows cookies to be sent
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Endpoints
app.get('/', (req, res) => {
    res.send('API Working');
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
