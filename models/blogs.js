const mongoose = require("mongoose")

const Schema = mongoose.Schema

const documentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    },
})

const Document = mongoose.model("blog", documentSchema)
module.exports = Document;