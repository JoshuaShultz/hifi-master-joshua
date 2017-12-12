module.exports = (app) => {
    require('./produkter')(app);
    require('./users')(app);
    require('./login')(app);
    //require('./kontakt')(app);
    require('./send')(app);
    require('./beskeder')(app);
   
};