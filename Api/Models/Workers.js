const mongoose = require("mongoose")
const moment = require("moment")

const workersSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    number_tel: Number,
    picture: {
        data: Buffer,
        type: String,
        required: false,
        default: "http://localhost:5000/uploads\\img.png"
    },
    function: String,
    events: [
        {
            title: String,
            start: String,
            end: String,
            timeStart: String,
            timeEndd: String,
            worker: String,
            place: String
        }
    ],
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
})

module.exports = mongoose.model("Workers", workersSchema)