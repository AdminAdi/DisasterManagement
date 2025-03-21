const mongoose = require('mongoose');

const connectionString = `mongodb+srv://itsmedeva3332:Aditya@cluster0.2676x.mongodb.net/DMS`

mongoose
    .connect(connectionString, {
    })
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });