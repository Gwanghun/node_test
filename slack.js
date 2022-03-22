const { WebClient } = require('@slack/web-api');

//apiToken = "xoxb-20949960309-3261241717542-0a2qUDJ7FHVcvWUaWgMlvteH";
apiToken = process.env.SLACK_TOKEN
const web = new WebClient(apiToken);
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#oomool_dev',
      text: `The current time is ${currentTime}`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }

})();