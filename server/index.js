const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const serviceUser = require('./service/service_user');
const serviceDestination = require("./service/service_destination");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api/user", serviceUser);
app.use("/api/destination", serviceDestination);
app.use('/test', function (req, res) {
    res.send("hallo")
})
app.listen(8008, () => {
    console.log("RUN ON PORT 8008");
});