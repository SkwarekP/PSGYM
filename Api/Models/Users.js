const mongoose = require("mongoose")
const moment = require("moment")
const bcrypt = require("bcrypt")

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
        required: false,
        default: "http://localhost:5000/uploads\\img.png"
    },
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }

})

usersSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model("Users", usersSchema)