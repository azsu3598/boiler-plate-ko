const express = require('express');
const app = express();
const port = 3000;
const { User } = require('./models/User.js');
const bodyParser = require('body-parser');
const coockieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(coockieParser());
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
        console.log("성공");
        res.status(200).json({
            success: true
        })
    }).catch((err) => {
        console.log(err);
        res.json({ success: false, err })
    })
})

//요청된 이메일을 데이터베이스에서 있는지 찾는다.
app.post('/api/users/login', (req, res) => {
    // 요청된 이메일을 데이터베이스 찾기
    User.findOne({ email: req.body.email })
        .then(docs => {
            if (!docs) {
                return res.json({
                    loginSuccess: false,
                    messsage: "제공된 이메일에 해당하는 유저가 없습니다."
                })
            }
            docs.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) return res.json({ loginSuccess: false, messsage: "비밀번호가 틀렸습니다." })
                // Password가 일치하다면 토큰 생성
                docs.generateToken((err, user) => {
                    if (err) return res.status(400).send(err);
                    // 토큰을 저장
                    res.cookie("x_auth", user.token)
                        .status(200)
                        .json({ loginSuccess: true, userId: user._id })
                })
            })
        })
        .catch((err) => {
            return res.status(400).send(err);
        })
})

//비밀번호 까지 맞다면 토큰을 생성하기.



app.listen(port, () => console.log(`Example app listening on port ${port}!`))