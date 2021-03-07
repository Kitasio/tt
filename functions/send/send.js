const fetch = require("node-fetch");
const querystring = require("querystring");

exports.handler = async (event, context) => {
  console.log(event.body)
  return fetch('https://c53evq5u41.execute-api.us-east-2.amazonaws.com/staging', {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: event.body
  })
  .then(() => ({
    statusCode: 204,
    body: `Thank you! Your message has been sent.`
  }))
  .catch(error => ({
    statusCode: 422,
    body: `Oops! Something went wrong. ${error}`
  }));
}
