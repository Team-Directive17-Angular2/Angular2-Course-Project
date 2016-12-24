module.exports = function({environment}){
    const config ={
        development: {
            cookieName: "team-directive-17",
            webToken: "web-token-42",
            sessionSecret: 'secret-session',
            connectionString: 'mongodb://localhost:27017/directive-17',
            port: 3000,
    },
        production: {
            cookieName: process.env.COOKIE_NAME,
            webToken: process.env.WEB_TOKEN,
            sessionSecret: process.env.SESSION_SECRET,
            connectionString: process.env.CONNECTION_STRING,
            port: process.env.PORT
    }};

    return config[environment];
};