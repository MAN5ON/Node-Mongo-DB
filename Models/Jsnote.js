const {Schema, model} = require('mongoose');

const jsnote = new Schema({
    command: {
        type: String,
        required: true
    },
    library: {
        type: String,
        required: true
    },
    whatdo: {
        type: String,
        required: true
    }
});

module.exports = model('Jsnote', jsnote);