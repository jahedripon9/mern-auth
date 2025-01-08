import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/authControllers.js';
import userAuth from '../middleware/userAuth.js';

const authRoutes = express.Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);
authRoutes.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRoutes.post('/verify-account', userAuth, verifyEmail);
authRoutes.get('/is-auth', userAuth, isAuthenticated);
authRoutes.post('/send-reset-otp', sendResetOtp);
authRoutes.post('/reset-password', resetPassword);


export default authRoutes;
