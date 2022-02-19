const mongoose = require("mongoose")
const moment = require("moment")

const usersSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    number_tel: Number,
    isAdmin: {
        type: Boolean,
        immutable: true
    },
    picture: {
        data: Buffer,
        type: String,
    },
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }

})

module.exports = mongoose.model("Users", usersSchema)