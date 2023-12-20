const express = require("express");
const router = express.Router();
const connection = require("../connection.js");
const moment = require("moment");
const multer = require("multer");
const dotenv = require("dotenv").config();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("avatar"), function (req, res) {
  const city = req.body.m_city_tabs_id;
  const fullname = req.body.fullname;
  const nickname = req.body.nickname;
  const rating = req.body.rating;
  const price = req.body.price;
  const region = req.body.region;
  const about = req.body.about;
  const email = req.body.email;
  const speak = req.body.speak;
  const address = req.body.address;
  const created_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  const avatar = req.file.originalname;
  connection.query(
    `insert into m_guide_tabs (m_city_tabs_id,fullname,nickname,avatar,about,email,region,price,rating,speak,address,created_at) values ('${city}','${fullname}','${nickname}','${avatar}','${about}','${email}','${region}','${price}','${rating}','${speak}','${address}','${created_at}')`,
    function (err, result, field) {
      if (err) throw err;
      else {
        result.avatar = "http://" + process.env.DIRECTORY + result?.avatar;
        return res.status(200).json({
          status: "success",
          data: result,
        });
      }
    }
  );
});

router.delete("/delete/:id", function (req, res) {
  const params = req.params;
  connection.query(
    `delete from m_guide_tabs where id = '${params.id}'`,
    function (err, result, field) {
      if (err) throw err;
      else {
        return res.status(200).json({
          status: "success",
          data: result,
        });
      }
    }
  );
});

router.get("/", function (req, res) {
  const paramsRegion = req.query.region;
  const paramsSearch = req.query.search;
  let urls = `select * from m_guide_tabs`;
  if (paramsRegion) {
    urls = `select * from m_guide_tabs where m_city_tabs_id like '%${paramsRegion}%'`;
  }
  if (paramsSearch) {
    urls = `select * from m_guide_tabs where fullname like '%${paramsSearch}%'`;
  }
  if (paramsRegion && paramsSearch) {
    urls = `select * from m_guide_tabs where m_city_tabs_id like '%${paramsRegion}%' or fullname like '%${paramsSearch}%'`;
  }
  connection.query(urls, function (err, result, field) {
    if (err) throw err;
    else {
      result.forEach((element) => {
        element.avatar = "http://" + process.env.DIRECTORY + element?.avatar;
      });
      return res.status(200).json({
        status: "success",
        data: result,
      });
    }
  });
});

router.get("/detail/:id", function (req, res) {
  const params = req.params;
  connection.query(
    `select * from m_guide_tabs where id = '${params.id}'`,
    function (err, result, field) {
      if (err) throw err;
      else {
        result[0].avatar =
          "http://" + process.env.DIRECTORY + result[0]?.avatar;
        return res.status(200).json({
          status: "success",
          data: result[0],
        });
      }
    }
  );
});


module.exports = router;
