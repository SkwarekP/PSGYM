const mongoose = require("mongoose")
const moment = require("moment")

const assortmentSchema = mongoose.Schema({
    title: String,
    picture: {
        data: Buffer,
        type: String,
        required: false,
        /*default: "http://localhost:5000/uploads\\img.png"*/
    },
    stan: Number,
    createdAt: {
        type: String,
        immutable: true,
        default: () => {
            return moment().format("YYYY-MM-DD");
        }
    }
})

module.exports = mongoose.model("Assortment", assortmentSchema)