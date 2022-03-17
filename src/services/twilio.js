require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function sendMessageRemember() {
  await client.messages
    .create({
      body: `eai meu colega, vai bater o ponto hoje não? 
      https://luby-timesheet.azurewebsites.net/Bank/UpdateEmployee`,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+5511993235002",
    })
    .then((message) => console.log(message.sid))
    .done();
}

module.exports = { sendMessageRemember };
