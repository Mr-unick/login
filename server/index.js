const { Router } = require('express');
const express=require('express');
const cors=require('cors')
const { connection } = require('./db/connection');
const { router } = require('./router/routes');
const bodyParser = require('body-parser');
const app=express();

//  body parser for post method
app.use(bodyParser.json({extended:true}));
app.get("/",(req,res)=>{
    res.render("server is running")
})
//
app.use(express.urlencoded({extended:false}));
// share data between backend and frontend servers
app.use(cors())  

// database concetion
connection();   


// router middleware
app.use('/',router)  

app.listen(5000,(req,res)=>{

})