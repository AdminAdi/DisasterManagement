const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: [true, "Name must be provided"],
    },
    Email: {
        type: String,
        required: [true, "Email must be provided"],
        unique: true,
        validate: {
            validator: function (value) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            message: 'Email must be valid'
        }
    },
    Phone: {
        type: String,
        required: [true, "Phone Number must be provided"],
        validate: {
            validator: function (value) {
                // Accepts 10-digit numbers starting with 6-9 OR +91 followed by 10 digits
                return /^(?:\+91)?[6789]\d{9}$/.test(value);
            },
            message: 'Phone number must be a valid Indian number (10 digits, starting with 6-9, optional +91)'
        }
    },
    Password: {
        type: String,
        required: [true, "Password must be provided"],
    },
    Address: {
        type: String,
        required: [true, "Address must be provided"]
    },
    UserType: {
        type: [String], // array of strings
        required: [true, "UserType must be provided, it is an array of strings"],
        default: "affected",
        enum: {
            values: ["admin", "volunteer", "donor", "affected"],
            message: `UserType is not supported, must be one of: admin, volunteer, donor, affected`
        }
    },
    Available: {
        type: Boolean,
        required: [true, "Availability must be provided"]
    },
    Community: {
        type: [Number], // array of Numbers
    },
    CreationTime: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
