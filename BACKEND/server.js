
//step:1

const express = require('express');
const  mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors  = require ("cors");
const bodyParser = require ("body-parser");
const app= express();

//step 5 
require("dotenv").config();
//end of step5

/*step 6 in package.json

"dev": "nodemon server.js"
 endofstep6*/

const PORT = process.env.PORT || 8070;
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());


//step:3
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
   // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,

   // useFindAndModify:false,


} );
const connection =mongoose.connection;
connection.once("open", () =>{
console.log("MongoDB connection successful");
});
app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`)
});



   /*step4 in package.json
   "scripts": {
   
    " start" :"node server.js"

  },
  */

  //step 8

  const studentRouter = require("./routes/students.js");
  app.use("/student", studentRouter);


//http://localhost:8070/Student