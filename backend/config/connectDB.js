const mongoose = require('mongoose');

const connectDB = async () => { 
    try {
        mongoose.set('strictQuery', true);
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('\x1b[33m','[MONGO-DB SERVER]MongoDB successfully Connected')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;