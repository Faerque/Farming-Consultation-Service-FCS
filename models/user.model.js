// model define the structure of the data and controller define the logic of the data and router define the route of the data
// mongoose is a library to connect mongodb with node js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    picture: {
        type: String,
        required: true,
        default: " ",
    },
    NID: {
        type: String,


    },
    phone: {
        type: String,
        required: true,
        default: " ",
    },
    age: {
        type: Number,

    },
    gender: {
        type: String,
        default: " ",

    },
    address: {
        type: String,
        default: " ",

    },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

// encrypt password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// decrypt password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', userSchema);
module.exports = User;