const express = require('express');
const router = express.Router();
const connection = require('../connection.js');
const moment = require('moment');
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/register", function (req, res) {
  const fullname = req.body.fullname;
  const nickname = req.body.nickname;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const created_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  const updated_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  connection.query(
    `insert into user_tabs (fullname,nickname,phone,email,password,created_at,updated_at) values ('${fullname}','${nickname}','${phone}','${email}','${password}','${created_at}','${updated_at}')`,
    function (error, result, field) {
      if (error) {
        return res.status(500).json({
          status: "failure Register",
          data: null,
          error: error,
        });
      } else {
        return res.status(200).json({
          status: "success",
          data: {
            fullname: fullname,
            nickname: nickname,
            phone: phone,
            email: email,
            password: password,
            created_at: created_at,
            updated_at: updated_at,
          },
        });
      }
    }
  );
});

router.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  connection.query(
    `select * from user_tabs where email = '${email}' and password = '${password}'`,
    function (error, result, field) {
      if (error) {
        return res.status(500).json({
          status: "failure",
          error: error,
          data: null,
        });
      } else {
        result[0]?.avatar = "http://" + process.env.DIRECTORY + result[0]?.avatar;
        return res.status(200).json({
          status: "success",
          data: result[0],
        });
      }
    }
  );
});

router.post("/update", upload.single("avatar"), function (req, res) {
  const id = req.body.id;
  const fullname = req.body.fullname;
  const nickname = req.body.nickname;
  const phone = req.body.phone;
  const email = req.body.email;
  const city = req.body.city;
  const country = req.body.country;
  const address = req.body.address;
  const updated_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  let querys = '';
  if (req.file) {
    const avatar = req.file.originalname;
    querys = `update user_tabs set city='${city}',avatar='${avatar}',country='${country}',address='${address}',fullname='${fullname}',nickname = '${nickname}',phone = '${phone}',email = '${email}',updated_at = '${updated_at}' where id = ${id}`;
  } else {
    querys = `update user_tabs set city='${city}',country='${country}',address='${address}',fullname='${fullname}',nickname = '${nickname}',phone = '${phone}',email = '${email}',updated_at = '${updated_at}' where id = ${id}`;
  }
  connection.query(querys, function (error, result, field) {
    if (error) {
      return res.status(500).json({
        status: "failure",
        error: error,
        data: null,
      });
    } else {
      return res.status(200).json({
        status: "success",
        data: {
          fullname: fullname,
          nickname: nickname,
          phone: phone,
          email: email,
          city: city,
          country: country,
          address: address,
          updated_at: updated_at,
        },
      });
    }
  });
});

router.get("/me/:id", function (req, res) {
  const id = req.params.id;
  connection.query(
    `select * from user_tabs where id = '${id}'`,
    function (error, result, field) {
      if (error) {
        return res.status(500).json({
          status: "failure",
          error: error,
          data: null,
        });
      } else {
        result[0].avatar = "http://" + process.env.DIRECTORY + result[0].avatar;
        return res.status(200).json({
          status: "success profile",
          data: result[0],
        });
      }
    }
  );
});

module.exports = router;