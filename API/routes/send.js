const db = require('../config/sql').connect();

module.exports = (app) => {

app.post('/sendbesked', (req, res) => {
    
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

    };