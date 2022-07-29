const express = require("express");
const app = express();
const connectDb = require("./config/db");

const PORT = process.env.PORT || 5000;
connectDb();

app.use(express.json({extended:false}));

app.get("/",(req , res)=>{
    
    res.send("API RUnning ======>>");
})

app.use("/api/users",require("./routes/api/users"));
app.use("/api/profile",require("./routes/api/profile"));
app.use("/api/posts",require("./routes/api/posts"));
app.use("/api/auth",require("./routes/api/auth"));


app.listen(PORT,()=> console.log(`your app is running on PORT  = ${PORT}`));