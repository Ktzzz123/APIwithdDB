const express= require("express")
const mongoose  = require("mongoose") 
const app =express();
const dotenv=require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(("DBConnection successful")))
.catch((err)=>{console.log(err);
});

app.get("/apitest", ()=> {
    console.log("test is successfully")
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("server running!!")
}) 