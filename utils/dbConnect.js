// import mongoose
const mongoose = require('mongoose');
// connect database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;