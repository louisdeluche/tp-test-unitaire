const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: {String, unique: true, required: true },
    isFormateur: { type: Boolean, unique: true, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);