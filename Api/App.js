const express = require("express")
const request = require("request")
const app = express()
const port = 5000
const cors = require("cors")
const mongoose = require("mongoose")
const clientsRoute = require("./Routes/Clients")

mongoose.connect(`mongodb+srv://Skwarek:${process.env.MONGO_PASSWORD}@psgym.uafix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => "callback")

app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(express.json())

app.use("/", clientsRoute)

app.get('/', (req, res) => res.send("Hello World"))

app.get("/getWeather", (req, res) => {
    request(
        "https://swapi.dev/api/people/1/",
        function (error, response, body) {
            if (!error && response.statusCode === 200) (
                res.send(body)
            )
        }
    )
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))