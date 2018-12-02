const nodemailer = require('nodemailer');
const xoauth2    = require('xoauth2');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
        type: 'OAuth2', //Authentication type
        user: 'info@zima.co.za',
        clientId: '{YOUR_CLIENTID}',
        clientSecret: 'CLIENT_SECRET',
        refreshToken: 'Refresh_token'
    }
});

// Defining mails options such as to, from, content etc
let mailOptions = {
    from: 'your_email@service.com',
    to: 'receiver_email@service.com',
    subject: 'This is subject',
    text: 'This is email content'
};

transporter.sendMail(mailOptions, function(e, r){
    if (e) {
        console.log(e);
    } else {
        console.log(r);
    }
    transporter.close();
});