const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000.");
});

// CHECK IF SERVER IS RUNNING
app.get("", (req, res) => {
    res.send("Server is running");
  });

app.post("/sendmail", (req, res) => {
    console.log("I'm on my node server and this is my request: " + req)
  sendMail(req, info => {
    console.log("The email is being sent to: " + req.email);
    res.send(info);
  });
});


async function sendMail(callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "dioguinhosousinha23@gmail.com",
      pass: "rafaelasousa"
    }
  });

  let mailOptions = await transporter.sendMail({
    from: `Vinti Tri ", "dioguinhosousinha23@gmail.com"`,
    from: `USER ", "dioguinhosousinha23@gmail.com"`,
    // to: myOrderDetails.email,
    subject: "Vinti Tri - Order Confirmation",
    html: "<h1> It's working! </h1>"
    // html: "<h1> Thank your for your purchase " + myOrderDetails.firstAndLastName + "!</h1> <br> <hr> <h2> The item: " + myOrderDetails.myItem.model + " will be sent to your adress (" + myOrderDetails.adressLine + ") in 3 to 5 working days. </h2> <br> <h2> Best Regards!, <br> VINTI-TRI TEAM </h2>"
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}