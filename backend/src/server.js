const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const currency = require('./Routers/currency');

const db = "mongodb+srv://saikumar2912:saikumar@cluster0.6llhp.mongodb.net/Tinder?retryWrites=true&w=majority"

const port = 8000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('MongoDB Connnected');
    })
    .catch((err) => {
        console.log({ err: err });
    });


app.use('/currency',currency)
app.listen(port, () =>
    console.log('Server running on port ' + port));