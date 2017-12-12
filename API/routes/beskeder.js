const db = require('../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');
 
module.exports = (app) => {
    app.post('/sendBesked', (req, res) => {
 
        let values = [];
        values.push(req.body.navn);
        values.push(req.body.email);
        values.push(req.body.emne);
        values.push(req.body.besked);
 
        db.execute('insert into beskeder set navn = ?, email = ?, emne = ?, besked = ?', values, (err, rows) => {
            if (err) {
                console.log(err);
                res.json(500, {
                    "message": "Internal Server Error",
                    "error": err
                })
            }
            else {
                res.json(200, {
                    "message": "Data indsat"
                })
            }
        })
    });
 
    app.get('/beskeder', function (req, res) {
        db.query('select * from beskeder', function (err, data) {
            res.send(data);
        })
    });
 
    app.del('/besked/:id', function (req, res) {
 
 
        db.query('DELETE FROM beskeder where id = ?', [req.params.id], (err, rows) => {
            if (err) {
                console.log(err);
                res.json(500, {
                    "message": "Internal Server Error",
                    "error": err
                })
            }
            else {
                res.json(200, {
                    "message": "Data slettet"
                })
            }
        })
    });
};