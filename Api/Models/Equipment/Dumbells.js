const mongoose = require("mongoose")
const moment = require("moment")

const dumbellsSchema = mongoose.Schema({
    producent: String,
    type: String,
    amount: Number,
    weight: Number,
    price: Number,
    date: {
        type: String,
        immutable: false,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
})

module.exports = mongoose.model("Dumbells", dumbellsSchema)