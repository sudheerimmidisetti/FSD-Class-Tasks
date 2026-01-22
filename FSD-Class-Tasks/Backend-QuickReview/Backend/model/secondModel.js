const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("form", formSchema);