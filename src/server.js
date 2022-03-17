const express = require("express");
const {
  sendMessageAt12Am,
  sendMessageAt17Pm,
} = require("./tasks/sendMessage.js");

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
  sendMessageAt12Am.start();
  sendMessageAt17Pm.start();
});
