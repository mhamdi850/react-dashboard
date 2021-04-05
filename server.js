const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const shortid = require("shortid")

const app = express()
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost/react-dahsboard-db",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//database structure
const Country = mongoose.model("countries", new mongoose.Schema({
    _id :{type: String, default: shortid.generate},
    title:{type: String},
    description:String,
    phase:String,
    amount:Number,
    year:Number,
    availibleYears:String,

}))
app.get("/api/countries", async (req, res) => {
    const countries = await Country.find({})
    res.send(countries)
})

app.post("/api/countries", async ( req, res) =>{
    const newCountry = new Country(req.body)
    const savedCountry = await newCountry.save()
    res.send(savedCountry)
})

app.delete("/api/countries/:id", async (req, res) => {
    const deletedCountry = await Country.findByIdAndDelete(req.params.id)
    req.send(deletedCountry)
})

const port = process.env.PORT || 7000
app.listen(port , () => console.log("listen at http://localhost:7000 "))