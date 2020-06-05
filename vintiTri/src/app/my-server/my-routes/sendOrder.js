// RUN THE ROUTER
module.exports = function(app) {

  // BODY PARSER
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  
  // NODEMAILER
  const nodemailer = require("nodemailer");
  
  
  // SEND EMAIL WITH CONTACT FORM OR FEEDBACK
  app.post('/sendorder', function (req, res) {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "dioguinhosousinha23@gmail.com",
          pass: "x"
        }
      });
    
      let mailOptions = {
          to: req.body.email,
          subject: "Purchase Confirmation",
          from: `VINTI TRI " "dioguinhosousinha23@gmail.com"`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });
      res.writeHead(301, { Location: 'index.html' });
      res.end();
    });
  
  }
  