var express = require('express');
var router = express.Router();
var { query } = require('../../db/db')

/* GET home page. */
router.get('/users/:userid', async function(req, res, next) {
    userid = req.params.userid;
    sql = "select * from user where id = ?";
    try {
        let result = await query(sql, userid)
        res.json({result: result});
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = router;