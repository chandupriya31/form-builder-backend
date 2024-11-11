const mongoose = require('mongoose');
const { Schema, model } = mongoose


const formSchema = new Schema({
    title: String,
    inputs: [{
        selected_type: String,
        input_value: String,
        placeholder: String
    }]
}, { timestamps: true })

const FormModel = new model('Form', formSchema)

module.exports = { FormModel }