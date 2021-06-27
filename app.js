const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes.routes")
const morgan = require("morgan");

//const {logger,printSomething} = require("./middlewares/app.middlewares");


//app.use(logger, printSomething);
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(userRoutes); 
app.get('/',(req,res)=>{
    //res.status(201).send("<h1>Home Page - Get request<\h1>"); 
    res.sendFile("home.html", {root: "./views"});
});

app.post('/', (req,res)=>{  
    res.status(201).send("<h1>Home Page - Post request<\h1>"); 
});

app.get('/about', (req,res)=>{
    res.cookie("username", "reyan");
    //res.append("id", "172828");
    //res.clearCoookie("username");
    res.send("<h1>About Page<\h1>"); 
});

app.get('/contact', (req,res)=>{
    res.json({name:"Reyan", profession:"Student"});
    //res.send("<h1>Contact Page<\h1>"); 
});

app.use((req, res)=>{
    res.status(401).send("Page doesn't exist");
});

module.exports = app;