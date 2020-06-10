// RUN THE ROUTER
module.exports = function(app) {

  // BODY PARSER
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  
  
  // NODEMAILER
  const nodemailer = require("nodemailer");
  
  var fs = require('fs');
  
  // SEND EMAIL WITH CONTACT FORM OR FEEDBACK
  app.post('/sendemail', function (req, res) {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "vinti.tri.shop@gmail.com",
          pass: "allwayswi2m8"
        }
      });
  
          let mailOptions = {
            to: req.body.email,
            subject: "Contact Request - " + req.body.subject,
            from: `Vinti-Tri " "vinti.tri.shop@gmail.com"`,
            html: `<div style="margin-top: 5%; margin-bottom: 2%; background-color: rgba(255, 255, 255, 0.726); font-family: 'Montserrat', sans-serif; color: rgba(128, 128, 128, 0.87);">    
            <div style="  padding: 2%; margin-top: 5%; color: rgba(0, 0, 0, 0.87); text-align: left;"> 
            Hello ` + req.body.name + `, <br> <br>
            We received your contact message and our support team we will contact you shortly! <br>
            '' ` + req.body.message + ` '' <br> <br>
            Best Regards, <br>
            Vinti-Tri Team
            </div>
            <br>
            <hr style=" height: 3px; color: rgba(128, 128, 128, 0.87); background-color:  rgba(128, 128, 128, 0.87);">
            <div style="text-align: center; font-size: 12px; color: rgba(128, 128, 128, 0.87); font-weight: bolder; margin-top: 1%;">
                “You can change what you do, but not what you want.”
            </div>
            <br>
                <div style="text-align: center;font-size: 12px; margin-top: 2%"> Follow us on social media </div> <br>
                    <div style="text-align: center; margin:auto">
                        <a href="https://www.facebook.com/Vinti-Tri-103694794426767" target="_blank"><img alt="Instagram" width="20" src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300" /></a>
                        <a href="https://www.instagram.com/vinti_tri/" target="_blank"><img alt="Facebook" width="20" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" /></a>
                    </div>
               
            <div style="text-align: center;font-size: 12px; margin-top: 2%">
                © 2020 VintiTri Ltd. <br>
                All rights reserved. <br>
                VintiTri is a  registered trademark of VintiTri Ltd in the Portugal and/or other countries. <br>
                All other trademarks are the property of their respective owners. <br>
                PLEASE DO NOT REPLY TO THIS EMAIL.
            </div>
        </div>`
          };
          transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
        });
          res.end();
     // SENDING THE INFO TO MY EMAIL
  let mailOptions2 = {
    to: "vinti.tri.shop@gmail.com",
    subject: "Contact Request - " + req.body.subject,
    from: `Vinti-Tri " "vinti.tri.shop@gmail.com"`,
    html: `<div style="margin-top: 5%; margin-bottom: 2%; background-color: rgba(255, 255, 255, 0.726); font-family: 'Montserrat', sans-serif; color: rgba(128, 128, 128, 0.87);">    
            <div style="  padding: 2%; margin-top: 5%; color: rgba(0, 0, 0, 0.87); text-align: left;"> 
            Hello Vinti Tri, <br> <br>
            The following user: ` + req.body.name +  `, with the email: ` + req.body.email + `, sent you this contact message: <br>
            '' ` + req.body.message + ` '' <br> <br>
            Best Regards, <br>
            Vinti-Tri Team
            </div>
            <br>
            <hr style=" height: 3px; color: rgba(128, 128, 128, 0.87); background-color:  rgba(128, 128, 128, 0.87);">
            <div style="text-align: center; font-size: 12px; color: rgba(128, 128, 128, 0.87); font-weight: bolder; margin-top: 1%;">
                “You can change what you do, but not what you want.”
            </div>
            <br>
                <div style="text-align: center;font-size: 12px; margin-top: 2%"> Follow us on social media </div> <br>
                    <div style="text-align: center; margin:auto">
                        <a href="https://www.facebook.com/Vinti-Tri-103694794426767" target="_blank"><img alt="Instagram" width="20" src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300" /></a>
                        <a href="https://www.instagram.com/vinti_tri/" target="_blank"><img alt="Facebook" width="20" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" /></a>
                    </div>
               
            <div style="text-align: center;font-size: 12px; margin-top: 2%">
                © 2020 VintiTri Ltd. <br>
                All rights reserved. <br>
                VintiTri is a  registered trademark of VintiTri Ltd in the Portugal and/or other countries. <br>
                All other trademarks are the property of their respective owners. <br>
                PLEASE DO NOT REPLY TO THIS EMAIL.
            </div>
        </div>`
  };
  transporter.sendMail(mailOptions2, (error, info) => {
  if (error) {
      return console.log(error);
  }
  });
    });
  }
  