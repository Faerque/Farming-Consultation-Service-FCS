// import consultation model
const UserConsultation = require('../models/userConsultation');
const asyncHandler = require('express-async-handler');
// here we will create a function to take a consultation from user

const createConsultation = asyncHandler(async (req, res) => {
    const { userName,
        userEmail,
        consultationName,
        userPhone,
        consultationImgUrl,
        consultationDescription,
        consultationDescriptionByAdmin,
        consultationStatus } = req.body;

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
        consultationDescriptionByAdmin

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
            consultationDescriptionByAdmin: consultation.consultationDescriptionByAdmin
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

// here we will get a consultation to update consultation description and status

const updateConsultationDescription = asyncHandler(async (req, res) => {
    const { consultationDescriptionByAdmin, consultationStatus } = req.body;
    const consultation = await UserConsultation.findById(req.params.id);
    if (consultation) {
        consultation.consultationDescriptionByAdmin = consultationDescriptionByAdmin;
        consultation.consultationStatus = consultationStatus;
        const updatedConsultation = await consultation.save();
        res.json({
            _id: updatedConsultation._id,
            userName: updatedConsultation.userName,
            userEmail: updatedConsultation.userEmail,
            userPhone: updatedConsultation.userPhone,
            consultationName: updatedConsultation.consultationName,
            consultationImgUrl: updatedConsultation.consultationImgUrl,
            consultationDescriptionByAdmin: updatedConsultation.consultationDescriptionByAdmin,
            consultationStatus: updatedConsultation.consultationStatus,
        });
    } else {
        res.status(404);
        throw new Error("Consultation not found");
    }
});

module.exports = { createConsultation, getAllConsultation, updateConsultationDescription };