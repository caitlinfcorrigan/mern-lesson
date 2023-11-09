const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    create
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        // Create the token
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        // Client checks for non-2xx status code
        res.status(400).json(err);
    }
}

// Helper functions
function createJWT(user) {
    return jwt.sign(
        // Data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    );
}