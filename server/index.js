const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const accountSid = "***";
const authToken = "***";
const client = twilio(accountSid, authToken);

const app = express();

app.use(cors());

app.get("/forget-password", (req, res, next) => {
  const { recipient, code } = req.query;

  client.messages
    .create({
      body: "Your verification code is: " + code,
      to: "+84" + recipient,
      from: "+17633739126",
    })
    .then((message) => console.log(message.body));
});

app.listen(4000, () => {
  console.log("Running on port 4000");
});
