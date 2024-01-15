const express = require('express');
const app = express();
require('./db/config');
const User =require("./db/User");
app.post("/register",(req,resp)=>{
    resp.send("Api is in progress....");
})
app.listen(3000, () => {
    console.log("Server is running on port 5000");
});
