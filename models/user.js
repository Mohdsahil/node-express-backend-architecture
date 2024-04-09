const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlenght: 50,
        trim: true
    },
    phone: {
        type: String,
        maxlenght: 13,
        trim: true,
        default: null
    },
    email: {
        type: String,
        require: true,
        maxlenght: 13,
        trim: true
    },
    photo: {
        type: String,
        default: null
    },
    role: {
        type: Number,
        default: 0 // 1 => admin , 0 => customer
    },
    password: {
        type: String, // store the encrypted password
        require: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);