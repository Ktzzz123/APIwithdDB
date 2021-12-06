const express= require("express")
const mongoose  = require("mongoose") 
const app =express();
const dotenv=require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")
const cors = require("cors");


dotenv.config();

// _______________________ MIDDLEWARE _______________________ //
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(("DBConnection successful")))
.catch((err)=>{console.log(err);
});


app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/product", productRoute)
app.use("/api/orders",orderRoute)
app.use("/api/cart",cartRoute)



app.listen(process.env.PORT || 5001, ()=>{
    console.log("server running!!")
}) 