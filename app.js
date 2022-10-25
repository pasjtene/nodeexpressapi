require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

app.listen(3500,()=> console.log("The server has started"));
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", (err)=>console.log(err));
db.once("open", (err)=>console.log("Connected to database"));

//Middlewares
/*
app.use('/posts', ()=> {
    console.log("We are on middleware")
})
*/

//app.use(express.json())

//ROUTES
const subscriberRouter = require("./routes/subscribers")

app.use('/users', subscriberRouter)

app.get("/", (req, resp) => {
    resp.send("Welcome back to node");
    console.log("Got a request")
})

app.get("/posts", (req, resp) => {
    resp.send("Post received Welcome back to node");
    console.log("Got a post request")
})