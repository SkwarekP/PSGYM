const mongoose = require("mongoose");
const moment = require("moment");
const {Schema} = require("mongoose");

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
    clientInfo: Schema.Types.ObjectId,
    isClientIn: {
        type: Boolean,
        default: true
    },
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