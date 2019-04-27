var mysql = require('mysql');
const dbconfig = require('./config')

var pool = mysql.createPool(dbconfig.mysql);

let query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, conn) => {
            if(error) {
                reject(error);
            }
            conn.query(sql, [params], (error, rows) => {
                if (error) {
                    reject(error);
                }
                resolve(rows);
                conn.release();
            })
        })
    });
}

module.exports = { query }