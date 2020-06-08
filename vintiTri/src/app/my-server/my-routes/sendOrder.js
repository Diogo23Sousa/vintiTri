// RUN THE ROUTER
module.exports = function(app) {

  // BODY PARSER
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  
  
  // NODEMAILER
  const nodemailer = require("nodemailer");
  
  var fs = require('fs');
  var handlebars = require('handlebars');
  
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
  
      fs.readFile('/Users/diogosousa/Desktop/vintiTri/vintiTri/src/app/my-server/my-routes/sendOrder.html', {encoding: 'utf-8'}, function (err, myEmail) {
        if (err) {
          console.log(err);
        } else {
          let mailOptions = {
            to: req.body.email,
            subject: "Order Confirmation",
            from: `Vinti-TriI " "dioguinhosousinha23@gmail.com"`,
            html: myEmail
          };
          transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
        });
          res.end();
      }
    });
    });
  }
  