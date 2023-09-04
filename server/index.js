const { Router } = require('express');
const express=require('express');
const cors=require('cors')
const { connection } = require('./db/connection');
const { router } = require('./router/routes');
const bodyParser = require('body-parser');
const app=express();



//  body parser for post method
app.use(bodyParser.json({extended:true}));

//
app.use(express.urlencoded({extended:false}));
// share data between backend and frontend servers
 
const corsOptions = {
    origin: 'http://localhost:3000', // Replace YOUR_CLIENT_PORT with the actual port of your client application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  };
  app.use(cors(corsOptions));
// database concetion
connection();   


// router middleware
app.use('/',router)  

app.listen(5000);