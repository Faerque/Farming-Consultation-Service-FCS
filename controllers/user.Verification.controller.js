const userVerification = require("../models/userVerification.model");
const asyncHandler = require('express-async-handler');


// here we will create user verification
const createUserVerification = asyncHandler(async (req, res) => {
    const { name, email, picture, NID, phone, address } = req.body;
    // a user can send multiple verification request so dont need to check by email

    // here we create user
    const user = await userVerification.create({
        name,
        email,
        picture,
        NID,
        phone,
        address,
    });
    // here we check if user is created or not
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            NID: user.NID,
            phone: user.phone,
            address: user.address,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// here we will get all user verification request
const getAllUserVerification = asyncHandler(async (req, res) => {
    const user = await userVerification.find({});
    res.json(user);
});

// here we will get user verification request by id
const getUserVerificationById = asyncHandler(async (req, res) => {
    const user = await userVerification.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

module.exports = {
    createUserVerification,
    getAllUserVerification,
    getUserVerificationById,
};