const mongoose = require('mongoose');

const Connection = async() => {
    const URL = process.env.DB_URL;
    await mongoose.connect(URL)
    .then(() => {
        console.log('Connected to db');
    })
    .catch(() => {
        console.log('Not connected to db');
    })
}


module.exports = { Connection };