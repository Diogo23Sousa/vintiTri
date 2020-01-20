var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dioguinhosousinha23@gmail.com',
    pass: 'rafaelasousa'
  }
});

var mailOptions = {
  from: 'dioguinhosousinha23@gmail.com',
  to: 'diogo.sousa23@outlook.com',
  subject: 'Information Request',
  text: `This message is going to me dinamic`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});