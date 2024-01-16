let banjang = require('../models')

// banjang item get
const getBanjangItem = (req, res) => {
    const sql = 'SELECT * FROM bjitem'
    banjang.query(sql, (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            console.log(result);
            res.send(result)
        }
    })
}

// banjang item get (name 오름차순)
const getBanjangItemASC = (req, res) => {
    const sql = 'SELECT * FROM bjitem ORDER BY name ASC';
    banjang.query(sql, (error, result) => {
        if (error) {
            console.log(`---${error}---`);
        } else {
            console.log(result);
            res.send(result)
        }
    })
}

module.exports = {
    getBanjangItem,
    getBanjangItemASC
}