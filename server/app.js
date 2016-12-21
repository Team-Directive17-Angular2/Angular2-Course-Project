const environment = process.env.NODE_ENV || 'development';
const express = require("express");
const passport = require("passport");

const config = require('./configurations/config')({ environment });

const app = express();

require('./configurations/database')( { config } );
require('./configurations/express')({ app });

require('./routes')({ app });

app.listen(config.port, function () {
    console.log('App listening on port: ' + config.port);
});