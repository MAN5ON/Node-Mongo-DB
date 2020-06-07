const {Schema, model} = require('mongoose');

const shkaf = new Schema({
    gde: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
    },
    razmer: {
        type: String,
        required: true
    },
    kolvo: {
        type: String,
        required: true
    }
});

module.exports = model('Shkaf', shkaf);