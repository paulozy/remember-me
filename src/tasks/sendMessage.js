const cron = require("node-cron");
const { sendMessageRemember } = require("../services/twilio.js");

const every5seconds = "*/5 * * * * *";
const everyDayAt12Am = "0 0 12 1/1 *";
const everyDayAt17Pm = "0 0 17 1/1 *";

const sendMessageAt12Am = cron.schedule(
  every5seconds,
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
