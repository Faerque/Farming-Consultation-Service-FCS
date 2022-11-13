// import consultation model
const UserConsultation = require('../models/userConsultation');
const asyncHandler = require('express-async-handler');
// here we will create a function to take a consultation from user

const createConsultation = asyncHandler(async (req, res) => {
    const { userName, userEmail, consultationName, userPhone, consultationImgUrl, consultationDescription, consultationStatus } = req.body;

    // needs to added a function that a user cant take a consultation more than one time

    // here we create a consultation
    const consultation = await UserConsultation.create({
        userName,
        userEmail,
        userPhone,
        consultationName,
        consultationImgUrl,
        consultationDescription,
        consultationStatus,
    });
    // here we check if consultation is created or not
    if (consultation) {
        res.status(201).json({
            _id: consultation._id,
            userName: consultation.userName,
            userEmail: consultation.userEmail,
            userPhone: consultation.userPhone,
            consultationName: consultation.consultationName,
            consultationImgUrl: consultation.consultationImgUrl,
            consultationDescription: consultation.consultationDescription,
            consultationStatus: consultation.consultationStatus,
        });
    } else {
        res.status(400);
        throw new Error("Invalid consultation data");
    }
});

// here we will get all consultation
const getAllConsultation = asyncHandler(async (req, res) => {
    const consultation = await UserConsultation.find({});
    res.json(consultation);
});

module.exports = { createConsultation, getAllConsultation };