const express = require("express");
const router = express.Router();
const connection = require("../connection.js");
const moment = require("moment");

router.post("/add", function (req, res) {
  const user_tabs_id = req.body.user_tabs_id;
  const m_guide_tabs_id = req.body.m_guide_tabs_id;
  const order_date = moment(req.body.order_date).format("0YYYY-MM-DD");
  const status = 0;
  const created_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  connection.query(
    `insert into t_order_tabs (user_tabs_id,m_guide_tabs_id,order_date,status,created_at) values ('${user_tabs_id}','${m_guide_tabs_id}','${order_date}','${status}','${created_at}')`,
    function (error, result, field) {
      if (error) {
        return res.status(500).json({
          status: "failure Add Order",
          data: null,
          error: error,
        });
      } else {
        return res.status(200).json({
          status: "success",
          data: {
            user_tabs_id: user_tabs_id,
            m_guide_tabs_id: m_guide_tabs_id,
            order_date: order_date,
            status: status,
            created_at: created_at,
          },
        });
      }
    }
  );
});

router.get("/", function (req, res) {
  connection.query(
    `select * from t_order_tabs`,
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
          data: result,
        });
      }
    }
  );
});

router.get("/detail/:id", function (req, res) {
  const id = req.params.id;

  connection.query(
    `select * from t_order_tabs where id = '${id}'`,
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

router.get("/me/:id", function (req, res) {
  const id = req.params.id;
  connection.query(
    `select a.*,b.fullname,b.price,b.region from t_order_tabs a left join m_guide_tabs b on a.m_guide_tabs_id = b.id where a.user_tabs_id = '${id}' `,
    function (error, result, field) {
      if (error) {
        return res.status(500).json({
          status: "failure",
          error: error,
          data: null,
        });
      } else {
        result.forEach((element) => {
          element.order_date = moment(element.order_date).format(
            "DD MMMM YYYY"
          );
        });
        return res.status(200).json({
          status: "success",
          data: result,
        });
      }
    }
  );
});

router.post("/updated", function (req, res) {
  const id = req.body.id;
  const status = req.body.status;

  connection.query(
    `update t_order_tabs set status='${status}' where id = ${id}`,
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
          data: result,
        });
      }
    }
  );
});

module.exports = router;
