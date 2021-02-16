const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const envSecret = process.env.RECAPTCHA_SECRET;

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
             // TODO: send data to mail
             console.log("all OK");
             res.send("all ok");
         }else{
             console.log("data not successful");
             console.log(resp.data);
             res.send("not ok");
         }
     })
     .catch(error => {
         console.log("problem while posting to google reCaptcha");
         res.send("not ok");
     });

});

app.listen(process.env.PORT || 8080);

function onSuccessResponse(res){

}

function onErrorResponse(res){

}