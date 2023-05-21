const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

// const MONGODB_URI = "mongodb+srv://Veggies_143:Veggies@143@internquestcluster.cdzc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB_URI=  "mongodb+srv://nageshf25:Ananya25@cluster0.ozvxqf0.mongodb.net/mydb?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URI || 'mongodb://localhost/internQ', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));    //Can be true for nested objects

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT,console.log(`Server is starting at ${PORT}`))