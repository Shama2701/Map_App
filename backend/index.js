const express = require("express")
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const app=express();
const userRoute=require("./routes/users");
const pinRoute= require("./routes/pins")
dotenv.config();

app.use(express.json())
 mongoose
 .connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 })
 .then(()=>{
    console.log("MongoDB Connected!");

 }).catch((err)=> console.log(err));
 
 //const port = process.env.PORT || 8800;
 app.use("/api/users",userRoute);
 app.use("/api/pins",pinRoute);
 app.listen(8800, () => {
   console.log("server is running");

})



// {
//     "username" :"john",
//     "title":"Eiffel Tower",
//     "desc":"it was amazing place",
//     "lat":1231142,
//     "long":12321
    
//     }
    
    