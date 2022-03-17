const cron = require("node-cron");
const { sendMessageRemember } = require("../services/twilio.js");

const everyDayAt12Am = "0 0 12 1/1 *";
const everyDayAt17Pm = "0 0 17 1/1 *";

const sendMessageAt12Am = cron.schedule(
  everyDayAt12Am,
  () => {
    sendMessageRemember();
  },
  {
    scheduled: false,
  }
);

const sendMessageAt17Pm = cron.schedule(
  everyDayAt17Pm,
  () => {
    sendMessageRemembe();
  },
  {
    scheduled: false,
  }
);

module.exports = { sendMessageAt12Am, sendMessageAt17Pm };
