const {Schema, model} = require('mongoose');

const uroki = new Schema({
    predmet: {
        type: String,
        required: true
    },
    rabota: {
        type: String,
        required: true
    },
    opisanie: {
        type: String,
        required: true
    },
    srok: {
        type: Date,
        required: true
    },
    completed_u: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Uroki', uroki);