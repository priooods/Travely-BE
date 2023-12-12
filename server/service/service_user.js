const express = require('express');
const router = express.Router();
const connection = require('../connection.js');
const moment = require('moment');

router.post("/register", function (req, res) {
    const fullname = req.body.fullname;
    const nickname = req.body.nickname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const created_at = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const updated_at = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    connection.query(
        `insert into user_tabs (fullname,nickname,phone,email,password,created_at,updated_at) values ('${fullname},'${nickname}','${phone}','${email}','${password}','${created_at}','${updated_at}')`
        , function (error, result, field) {
            if (error) { 
                return res.status(500).json({
                  status: "failure",
                  data: null
                });
             }
            else {
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
    });
})

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
        return res.status(200).json({
          status: "success",
          data: result[0],
        });
      }
    }
  );
});

router.post("/update", function (req, res) {
  const id = req.body.id;
  const fullname = req.body.fullname;
  const nickname = req.body.nickname;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const updated_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  connection.query(
    `update user_tabs set fullname='${fullname}',nickname = '${nickname}',phone = '${phone}',email = '${email}',password = '${password}',updated_at = '${updated_at}' where id = ${id}`,
    function (error, result, field) {
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
            password: password,
            updated_at: updated_at,
          },
        });
      }
    }
  );
});

module.exports = router;