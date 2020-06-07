const {Schema, model} = require('mongoose');

const holod = new Schema({
    type: {
        type: String,
        required: true
    },
    przv: {
        type: String,
        required: true
    },
    kpl: {
        type: Date,
        required: true
    },
    prpl: {
        type: Date,
        required: true
    }
});

module.exports = model('Holod', holod);