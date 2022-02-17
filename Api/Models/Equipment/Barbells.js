const mongoose = require("mongoose")
const moment = require("moment")

const barbellsSchema = mongoose.Schema({
    producent: String,
    type: String,
    amount: Number,
    weight: Number,
    price: Number,
    date: {
        immutable: true,
        type: String,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
})

module.exports = mongoose.model("Barbells", barbellsSchema)