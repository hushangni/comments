const express = require('express');
const router = express.Router();

const User = require('../user/userModel');
const userService = require('./userService');

// GET /api/user
// @desc Get user info
// @access Private
router.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user));
});

// POST api/user
// @desc Create a user
// @access Public
router.post('/', (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save().then(user => res.json(user));
})




module.exports = router;