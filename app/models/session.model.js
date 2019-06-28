const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = mongoose.Schema({
    formateur: { type: Schema.Types.ObjectId, ref: 'User' },
    eleve: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    title: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Session', SessionSchema);