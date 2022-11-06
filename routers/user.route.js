const express = require('express');
const { userReg, loginUser, allUsers, updateUser } = require('../controllers/user.controller');

// here we got router from express js
const router = express.Router();

// here we got user controller though we save data to database so we using .post method of express js
router.route('/register').post(userReg);
router.route('/login').post(loginUser);
router.route('/allUsers').get(allUsers);
router.route('/updateUser/:id').put(updateUser);

module.exports = router;