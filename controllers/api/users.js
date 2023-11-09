const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

module.exports = {
    create,
    login
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

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        console.log(user)
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        console.log(match);
        if (!match) throw new Error();
        const token = createJWT(user);
        console.log(token)
        res.json(token);
    } catch {
        res.status(400).json("Bad Credentials");
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