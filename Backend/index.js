const express = require('express');
require('./db/config1.js');
require('./db/User1');
const app = express();
app.post("/register",(req,resp)=>{
    resp.send("api in progress...")
})
app.listen(3000);
