const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/produkter', function (req, res) {
        db.query('select * from produkter', function (err, data) {
            res.send(data);
        })
    });

    app.put('/produkt/:id', function (req, res) {
        let values = [];
        values.push(req.body.navn);
        values.push(req.body.pris);
        values.push(req.body.kategori);
        values.push(req.body.producent);
        values.push(req.body.beskrivelse);
        values.push(req.body.billede);
        values.push(req.params.id);

        db.query(`UPDATE produkter SET navn = ?, pris = ?, fk_kategori = ?, fk_producent = ?, beskrivelse = ?, img = ? where id = ?`, values, function (err, data) {
            if (err) {
                console.log(err);
            }
            res.send(204);
        })
    });

    app.get('/produkter/search/:tekst', function (req, res) {
        db.query(`
        select * from produkter 
        where 
            beskrivelse like '%${[req.params.tekst]}%' OR
            navn like '%${[req.params.tekst]}%'
            `, function (err, data) {
                if (err) {
                    console.log(err);
                }
                res.send(data);
            })
    })

    app.post('/create', (req, res) => {

        let values = [];
        values.push(req.body.navn);
        values.push(req.body.pris);
        values.push(req.body.kategori);
        values.push(req.body.producent);
        values.push(req.body.beskrivelse);
        values.push(req.body.billede);

        db.execute('insert into produkter set navn = ?, pris = ?, fk_kategori = ?, fk_producent = ?, beskrivelse = ?, img = ?', values, (err, rows) => {
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

    app.del('/produkt/:id', function (req, res) {


        db.query('DELETE FROM produkter where id = ?', [req.params.id], (err, rows) => {
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

    app.get('/produkt/:id', function (req, res) {
        db.query(`SELECT * FROM produkter where id = ?`, [req.params.id], function (err, data) {
            if (err) {
                console.log(err);
            }
            res.send(data);
        })
    });


    // app.get('/produkt/:id', function (req, res) {
    //     db.query('SELECT FROM produkter where id = ?', [req.params.id], (err, rows) => {
    //         if (err) {
    //             console.log(err);
    //             res.json(500, {
    //                 "message": "Internal Server Error",
    //                 "error": err
    //             })
    //         }
    //         else {
    //             res.json(200, {
    //                 "message": "Data hentet"
    //             })
    //         }
    //     })
    // });
}