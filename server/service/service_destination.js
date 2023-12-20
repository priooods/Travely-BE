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

router.post("/add",upload.array('photo',5), function (req, res) {
    const city = req.body.m_city_tabs_id;
    const title = req.body.title;
    const type = req.body.type;
    const rating = req.body.rating;
    const price = req.body.price;
    const region = req.body.region;
    const description = req.body.description ?? '-';
    const facility = req.body.facility ?? '-';
  const created_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  const photo = req.files;
  connection.query(
    `insert into m_destination_tabs (m_city_tabs_id,title,type,rating,price,region,description,facility,created_at) values ('${city}','${title}','${type}','${rating}','${price}','${region}','${description}','${facility}','${created_at}')`,
    function (err, result, field) {
      if (err) throw err;
      else {
        if (photo.length > 0) {
          let query = "";
          for (let i = 0; i < photo.length; i++) {
            query = query.concat(
              `('${result.insertId}' , '${photo[i].originalname
              }') ${i == photo.length - 1 ? "" : ","} `
            );
          }
          connection.query(
            `insert into t_destination_attachment_tabs (m_destination_tabs_id, attachment) values ${query}`,
            function (error, res2, field) {
              return res.status(200).json({
                status: "success",
                data: result,
                photo: res,
              });
            }
          );
        }
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
    `delete from m_destination_tabs where id = '${params.id}'`,
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
  let urls = `select * from m_destination_tabs`;
  if (paramsRegion) {
    urls = `select * from m_destination_tabs where m_city_tabs_id like '%${paramsRegion}%'`;
  }
  if (paramsSearch) {
    urls = `select * from m_destination_tabs where title like '%${paramsSearch}%'`;
  }
  if (paramsRegion && paramsSearch) {
    urls = `select * from m_destination_tabs where m_city_tabs_id like '%${paramsRegion}%' or title like '%${paramsSearch}%'`;
  }
  connection.query(urls, function (err, result, field) {
    if (err) throw err;
    else {
      console.log(urls);
      result.forEach((element) => {
        element.attachment = [];
      });
      connection.query(
        `select * from t_destination_attachment_tabs`,
        function (err2, results, field2) {
          if (err2) throw err2;
          else {
            result.forEach((element) => {
              results.forEach((item) => {
                if (item.m_destination_tabs_id == element.id) {
                  item.attachment =
                    "http://" + process.env.DIRECTORY + item.attachment;
                  element.attachment.push(item);
                }
              });
            });
            return res.status(200).json({
              status: "success",
              data: result,
            });
          }
        }
      );
    }
  });
});

router.get("/detail/:id", function (req, res) {
  const params = req.params;
  connection.query(
    `select * from m_destination_tabs where id = '${params.id}'`,
    function (err, result, field) {
      if (err) throw err;
      else {
        result.forEach((element) => {
          element.attachment = [];
        });
        connection.query(
          `select * from t_destination_attachment_tabs`,
          function (err2, results, field2) {
            if (err2) throw err2;
            else {
              result.forEach((element) => {
                results.forEach((item) => {
                  if (item.m_destination_tabs_id == element.id) {
                    item.original =
                      "http://" + process.env.DIRECTORY + item.attachment;
                    item.thumbnail =
                      "http://" + process.env.DIRECTORY + item.attachment;
                    element.attachment.push(item);
                  }
                });
              });
              return res.status(200).json({
                status: "success",
                data: result[0],
              });
            }
          }
        );
      }
    }
  );
});

router.get("/home", function (req, res) {
  connection.query(
    `select * from m_destination_tabs limit 4`,
    function (err, result, field) {
      if (err) throw err;
      else {
        let arrayId = [];
        result.forEach((element) => {
          arrayId.push(element.id);
          element.attachment = [];
        });
        connection.query(
          `select * from t_destination_attachment_tabs where m_destination_tabs_id in (${arrayId})`,
          function (err2, results, field2) {
            if (err2) throw err2;
            else {
              result.forEach((element) => {
                results.forEach((item) => {
                  if (item.m_destination_tabs_id == element.id) {
                    item.attachment =
                      "http://" + process.env.DIRECTORY + item.attachment;
                    element.attachment.push(item);
                  }
                });
              });
              return res.status(200).json({
                status: "success",
                data: result,
              });
            }
          }
        );
      }
    }
  );
});

router.get("/city", function (req, res) {
  connection.query(`select * from m_city_tabs`, function (err, result, field) {
    if (err) throw err;
    else {
      return res.status(200).json({
        status: "success",
        data: result,
      });
    }
  });
});

router.post("/city/add", function (req, res) {
  const title = req.body.title;
  connection.query(
    `insert into m_city_tabs (title) values ('${title}')`,
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

module.exports = router;
