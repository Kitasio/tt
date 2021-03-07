const TG = require('telegram-bot-api')
const api = new TG({
  token: '1409668114:AAE_jm1Q70ydudhsEc1DOrMDmsMuvZ7o8IQ'
})

exports.handler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body)
    const name = data.name || "NAME";
    const number = data.number || "NUMBER";
    const email = data.email || "EMAIL";
    const tell_us = data.tell_us || "Tell us about your company";
    const describe_request = data.describe_request || "Describe your request";
    const budget = data.budget || "BUDGET";
    const dates = data.dates || "DATES";
    
    const recipients = ['410444568', '506713883']
    console.log(data)

    recipients.forEach(function(el, index) {
      api.sendMessage({
        chat_id: el,
        text: `NAME: ${name} \nPHONE NUMBER: ${number} \nEMAIL: ${email} \nTELL US ABOUT YOUR COMPANY: ${tell_us} \nDESCRIBE YOUR REQUEST: ${describe_request} \nBUDGET: ${budget} \nDATES ${dates}`
      })
    })
    callback(null);
  } catch (err) {
    callback(err);
  }
};