const mongoose = require('mongoose');

// in consultation model it will have consultation name, 
//consultation image by user, consultation request time, consultation description by user, user name, user email that all will have on this model and it will be  saved in database. consultation status will be pending by default and it will be changed by admin.

const userConsultationSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPhone: {
        type: Number,
        required: true,
    },
    consultationName: {
        type: String,
        required: true,
    },
    consultationImgUrl: {
        type: String,
        required: true,
    },
    consultationDescription: {
        type: String,
        required: true,
    },
    consultationRequestTime: {
        type: Date,
        required: true,
        default: Date.now,
    },
    consultationStatus: {
        type: String,
        // required: true,
        default: 'pending',
    },
});

// making a collection of consultation taken by user
const UserConsultation = mongoose.model('UserConsultation', userConsultationSchema);
module.exports = UserConsultation;