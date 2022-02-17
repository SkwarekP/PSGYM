const mongoose = require("mongoose")
const moment = require("moment")

const otherSchema = mongoose.Schema({
    producent: String,
    name: String,
    destination: String,
    amount: Number,
    price: Number,
    date: {
        immutable: true,
        type: String,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
})

module.exports = mongoose.model("Other", otherSchema)