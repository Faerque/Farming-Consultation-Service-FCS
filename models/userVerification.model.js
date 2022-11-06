const mongoose = require('mongoose');

// user verfiication model

const userVerificationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
        required: true,
        default: " ",
    },
    NID: {
        type: String,
        required: true,
        default: " ",
    },
    phone: {
        type: Number,
        default: " ",
        required: true,
    },
    address: {
        type: String,
        required: true,
        default: " ",
    }
});

const UserVerification = mongoose.model('UserVerification', userVerificationSchema);
module.exports = UserVerification;