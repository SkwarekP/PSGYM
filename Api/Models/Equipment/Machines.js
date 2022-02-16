const mongoose = require("mongoose");
const moment = require("moment");

const machinesSchema = mongoose.Schema({
    serial_number: {
        immutable: true,
        type: String,
        required: true
    },
    name: String,
    producent: String,
    cena: Number,
    date: {
        type: String,
        immutable: false,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }

})


module.exports = mongoose.model("Machines", machinesSchema)