const mongoose = require('mongoose');

const Connection = async() => {
    await mongoose.connect(`mongodb+srv://adhangit:Abhi.250885@cluster0.shpergc.mongodb.net/todoDB`)
    .then(() => {
        console.log('Connected to db');
    })
    .catch(() => {
        console.log('Not connected to db');
    })
}


module.exports = { Connection };