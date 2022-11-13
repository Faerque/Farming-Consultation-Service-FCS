
const User = require("../models/user.model.js")

const asyncHandler = require('express-async-handler');
// const mongoose = require('mongoose');

const generateToken = require("../utils/generateToken");
// here we need name email password and picture from user so we use req.body . to know about req.body read this article https://www.geeksforgeeks.org/express-js-req-body-property/
// when we need something from the user we use req and when we need to send something to the user we use res
const userReg = asyncHandler(async (req, res) => {
    const { name, email, password, picture } = req.body;
    // here we check if user already exist or not
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400).json("User already exist");
        return;
    }
    // here we create user
    const user = await User.create({
        name,
        email,
        password,
    });
    // here we check if user is created or not
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture,
            isVerified: user.isVerified,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password, } = req.body;
    // here we check if user exist or not
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture,
            isVerified: user.isVerified,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    // checking the database mail and given mail to make user admin


})

// all user data    
const allUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// user information update by id
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;
        user.isVerified = req.body.isVerified || user.isVerified;
        user.picture = req.body.picture || user.picture;
        user.NID = req.body.NID || user.NID;
        user.gender = req.body.gender || user.gender;
        user.age = req.body.age || user.age;
        user.phone = req.body.phone || user.phone;
        user.address = req.body.address || user.address;
        const updatedUser = await user.save();
        res.json({

            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isVerified: updatedUser.isVerified,
            picture: updatedUser.picture,
            NID: updatedUser.NID,
            phone: updatedUser.phone,
            age: updatedUser.age,
            gender: updatedUser.gender,
            address: updatedUser.address,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

module.exports = { userReg, loginUser, allUsers, updateUser };