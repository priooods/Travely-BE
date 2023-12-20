const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const serviceUser = require('./service/service_user');
const serviceDestination = require("./service/service_destination");
const serviceGuide = require("./service/service_guide");
const serviceOrder = require("./service/service_order");
const cors = require("cors");
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/user", serviceUser);
app.use("/api/guide", serviceGuide);
app.use("/api/destination", serviceDestination);
app.use("/api/order", serviceOrder);
app.use('/test', function (req, res) {
    res.send("hallo")
})
app.listen(8008, () => {
    console.log("RUN ON PORT 8008");
});