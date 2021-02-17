const express = require('express');
const axios = require('axios');
const path = require('path');
const nodemailer = require("nodemailer");
const app = express();

const envSecret = process.env.RECAPTCHA_SECRET;
const senderEmailAdress = process.env.SENDER_EMAIL_ADDRESS;
const senderEmailPassword = process.env.SENDER_EMAIL_PASSWORD;
const personalEmailAdress = process.env.PERSONAL_EMAIL_ADDRESS;


app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({extended: true}));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/', function (req, res) {
    console.log("post requested. sending siteverify with data");
    let data= `secret=${envSecret}&response=${req.body['g-recaptcha-response']}`;
    console.log(data);
    axios.post('https://www.google.com/recaptcha/api/siteverify', data)
     .then(resp=>{
         if(resp.data.success){
             sendDataToEmail(req).then((info)=>{
                 console.log(info);
                 res.send("Message was sent successfully!");
             }).catch((err)=>{
                console.log(err);
                res.send("Something went wrong, please try again.");
             });

         }else{
             res.send("Something went wrong, please try again. are you a robot?");
         }
     })
     .catch(error => {
         console.log("problem while posting to google reCaptcha");
         res.send("not ok");
     });

});

app.listen(process.env.PORT || 8080);

async function sendDataToEmail(req){
    let transporter = nodemailer.createTransport({
        host: "SMTP.Office365.com",
        port: 587,
        secure: false,
        auth:{
            user: senderEmailAdress,
            pass: senderEmailPassword
        },
    });

    return await transporter.sendMail({
        from: senderEmailAdress,
        to: personalEmailAdress,
        subject: "WebMail: "+req.body['title'],
        text: "sender: "+req.body['email']+"\n"
                +"Text: "+"\n"
                +req.body['text'],

    });
}