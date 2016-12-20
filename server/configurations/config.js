module.exports = function({environment}){
    const config ={
        development: {
            sessionSecret: 'secret-session',
            connectionString: 'mongodb://localhost:27017/directive-17',
            port: 3000,
    },
        production: {
            sessionSecret: process.env.SESSION_SECRET,
            connectionString: process.env.CONNECTION_STRING,
            port: process.env.PORT
    }};

    return config[environment];
};