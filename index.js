const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mongodb:MPMYYlvakRjMm36K@cluster0.zqwqrkt.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send("hello World!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))