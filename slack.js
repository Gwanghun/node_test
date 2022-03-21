const Slack = require('slack-node');  // 슬랙 모듈 사용

// apiToken = "xoxb-2187790532-3291583852624-iTA91CkKeJvKvqLkJAm2lXPk";
apiToken = "xoxp-20949960309-20954168496-3280535436833-211a029dbb37ceb6fd2b966d12a80192";
const slack = new Slack(apiToken);

const send = async(message) => {
  slack.api('chat.postMessage', {
	  username: 'hooeni_bot',  // 슬랙에 표시될 봇이름
	  text:message,
	  channel:'#general'  // 전송될 채널 및 유저
	}, function(err, response){
	  console.log(response);
	});
}

send('테스트 전송');