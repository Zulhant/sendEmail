const express = require('express');
const nodemailer = require('nodemailer');
const app = express();


app.get('/user', (req, res) => {
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'your@gmail.com',
            pass : 'yourpassword'
        }
    });

    let mailOption = {
        from : 'your@gmail.com',
        to : 'yourTargetEmail',
        subject : 'subject text',
        text : 'text plain',
        html : 'text html'
    };

    transporter.sendMail(mailOption, (error, info) => {
        if (error){
            console.log(error);
        }
        console.log(info);
        transporter.close();
    }); 

    
});

app.listen(3000, () => {
    console.log('server is running');
});