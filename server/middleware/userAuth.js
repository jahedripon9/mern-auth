import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized, Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: tokenDecode.id }; // Add user info to the request object
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token, please log in again.' });
    }
};

export default userAuth;
