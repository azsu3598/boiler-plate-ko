const express = require('express');
const app = express();
const port = 3000;
const { User } = require('./models/User.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const config = require("./config/key.js");

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send("hello World!!!"))

app.post('/register', (req, res) => {
    //회원 가입 할 때 필요한 정보들을 clinet에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);

    const result = user.save().then(() => {
        res.status(200).json({
            success: true
        })
    }).catch((err) => {
        res.json({ success: false, err })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))