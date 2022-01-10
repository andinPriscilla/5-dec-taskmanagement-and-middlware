/* const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err)console.error(err)
    console.log("connected to database")
    // perform actions on the collection object
    
});
const db = client.db();

module.exports =db */

const mongoose = require('mongoose')

mongoose.connect(process.env.mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("connected to db");
})
.catch(error => {
    console.error(error);
    process.exit(1);
});
