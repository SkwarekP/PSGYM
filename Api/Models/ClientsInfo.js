const mongoose = require("mongoose")
const moment = require("moment")

const clientsInfo = mongoose.Schema({
    fromKarnetDate: {
        type: String,
        default: () => {
            return moment().format("YYYY-MM-DD")
        }
    },
    toKarnetDate: {
        type: String,
        default: () => {
            return moment().format("YYYY-MM-DD")
        }
    },
    whenIn: [String],
    whenOut: [String],
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }

})

module.exports = mongoose.model("clientsInfo", clientsInfo)