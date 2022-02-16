const mongoose = require("mongoose");
const moment = require("moment");
const clientSchema = mongoose.Schema({
    name: String,
    lastName: String,
    address: String,
    email: {
        type: String,
        lowercase: true,
    },
    number_tel: Number,
    number_magnetic_cart: Number,
    remaining_time: Number,
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
});

module.exports = mongoose.model("Clients", clientSchema)