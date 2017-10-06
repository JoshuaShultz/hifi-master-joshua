const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/produkter', function (req, res) {
        db.query('select * from produkter', function (err, data) {
            res.send(data);
        })
    })
    app.get('/produkter/search/:tekst', function (req, res) {
        db.query(`
        select * from produkter 
        where 
            beskrivelse like '%${[req.params.tekst]}%' OR
            navn like '%${[req.params.tekst]}%'
            `, function (err, data) {
                if(err){
                    console.log(err);
                }
            res.send(data);
        })
    })
}                                                   