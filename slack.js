const Slack = require('slack-node');  // 슬랙 모듈 사용

// apiToken = "xoxb-2187790532-3291583852624-iTA91CkKeJvKvqLkJAm2lXPk";
apiToken = "xoxb-20949960309-3261241717542-pNMYlZmL9uhd1yxxDOy2FoXR";
const slack = new Slack(apiToken);

const send = async(message) => {
  slack.api('chat.postMessage', {
	  username: 'test_bot',  // 슬랙에 표시될 봇이름
	  text:message,
	  channel:'#test'  // 전송될 채널 및 유저
	}, function(err, response){
	  console.log(response);
	});
}

send('테스트 전송');