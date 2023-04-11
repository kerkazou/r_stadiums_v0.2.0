const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

module.exports = {
    tokenGenerator: async (payload, expiresIn) => {
        // Create a JWT
        try {
            const token = await jwt.sign(payload, secretKey, { expiresIn });
            return token;
        }
        catch (error) {
            return error;
        }
    },
    tokenVerify: async (token) => {
        // Verify a JWT
        try {
            const decoded = await jwt.verify(token, secretKey);
            return decoded;
        }
        catch (error) {
            return error;
        }
    },
}
