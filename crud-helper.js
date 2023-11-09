// Use for testing CRUD using Node (without the app)
// Connect to the database
require('dotenv').config();
require('./config/database');

// Require Mongoose models
const User = require('./models/user');


// Local variables for handling retrieved docs
let user, item, category, order;
let users, items, categories, orders;