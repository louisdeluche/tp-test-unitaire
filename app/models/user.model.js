const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    isFormateur: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);