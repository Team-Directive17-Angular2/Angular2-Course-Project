const environment = process.env.NODE_ENV || 'development';
const config = require('./configurations/config')({ environment });

const app = require('./configurations/express')({});

require('./configurations/routes')({ app });

app.listen(config.port, function () {
    console.log('App listening on port: ' + config.port);
});