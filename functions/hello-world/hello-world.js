// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const { exec } = require("child_process");
const { stringify } = require("querystring");
exports.handler = async (event, context) => {
  try {
    curl = exec("curl -s https://jsonplaceholder.typicode.com/todos/1", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      //console.log(`stdout: ${stdout}`);
      if (stdout) {
        console.log(stdout)
        return curl
      }
    });
    const cu = stringify(curl)
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}`, curlOutput: cu }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
