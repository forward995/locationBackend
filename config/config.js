module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    // mongoUri: process.env.MONGODB_URI ||
    // process.env.MONGO_HOST ||
    // 'mongodb://' + (process.env.IP || 'localhost') + ':' +
    // (process.env.MONGO_PORT || '27017') +
    // '/crud',
    mongoUri: 'mongodb://admin:junk12345@ds251002.mlab.com:51002/holeinone',
    email: '',
    password: ''
}