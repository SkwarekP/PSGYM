const express = require("express")
const request = require("request")
const app = express()
const port = 5000
const cors = require("cors")
const mongoose = require("mongoose")
const clientsRoute = require("./Routes/Clients")
const machinesRoute = require("./Routes/Equipment/MachinesRoute")
const loadsRoute = require("./Routes/Equipment/LoadsRoute")
const dumbellsRoute = require("./Routes/Equipment/DumbellsRoute")
const barbellsRoute = require("./Routes/Equipment/BarbellsRoute")
const othersRoute = require("./Routes/Equipment/OthersRoute")

mongoose.connect(`mongodb+srv://Skwarek:${process.env.MONGO_PASSWORD}@psgym.uafix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => "callback")

app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(express.json())

app.use("/", clientsRoute)
app.use("/", machinesRoute)
app.use("/", loadsRoute)
app.use("/", dumbellsRoute)
app.use("/", barbellsRoute)
app.use("/", othersRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}`))