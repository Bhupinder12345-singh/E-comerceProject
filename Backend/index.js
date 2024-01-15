const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/config');
const User =require("./db/User");
app.use(cors());
app.use(bodyParser.json());
app.post("/register", async (req, resp) => {
    try {
        // Registration logic here
        resp.send("Api is in progress....");
    } catch (error) {
        console.error('Error during registration:', error);
        resp.status(500).send('Internal Server Error');
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 