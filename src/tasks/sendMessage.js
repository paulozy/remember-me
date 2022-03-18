const cron = require("node-cron");
const { sendMessageRemember } = require("../services/twilio.js");

const everyDayAt12PmAnd17Pm = "0 0 12,17 * * * *";

const sendMessageAt12PmAnd17Pm = cron.schedule(
  everyDayAt12PmAnd17Pm,
  () => {
    sendMessageRemember();
  },
  {
    scheduled: false,
  }
);

module.exports = { sendMessageAt12PmAnd17Pm };
