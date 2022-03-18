const express = require("express");
const { sendMessageAt12PmAnd17Pm } = require("./tasks/sendMessage.js");

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
  sendMessageAt12PmAnd17Pm.start();
});
