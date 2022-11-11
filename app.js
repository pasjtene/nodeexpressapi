require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const server_port = 3500;

app.listen(server_port,()=> console.log("The server has started on port ", server_port));
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", (err)=>console.log(err));
db.once("open", (err)=>console.log("Connected to database"));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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