const express = require("express");
const cors = require("cors");

// STARTING EXPRESS
const app = express();

// CORS
app.use(cors({ origin: "*" }));

// AVAILABLE ROUTES
//app.use('/sendemail', require('./my-routes/sendemail'));
//app.use('/sendorder', require('./my-routes/sendorder'));
// app.use('/test', require('./my-routes/test'))

require('./my-routes/sendemail')(app);
require('./my-routes/sendorder')(app);
require('./my-routes/sendfeedback')(app);


// SERVER STARTED
app.listen(3000, () => {
  console.log("The server started on port 3000.");
});

// CHECK IF SERVER IS RUNNING
app.get("", (req, res) => {
    res.send("Server is running");
});