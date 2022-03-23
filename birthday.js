const CronJob = require('cron').CronJob;
const { WebClient } = require('@slack/web-api');

/*
class birthdayCheck extends (WebClient, CronJob) {
  birthday_list = {
    "0322": "임광훈 생일 11111",
    "0323": "임광훈 생일 22222",
    "0324": "임광훈 생일 33333"
  }
  
  constructor(channel, today) {
    this.channel = channel
    this.today = today
  }

  viewText() {
    return this.birthday_list[this.today];
  }
}
const birthday = new birthdayCheck("#oomool_dev", "0322");
console.log( birthday.viewText() );
*/

const task = () => {
  const birthday_list = {
    "0322": "임광훈 생일 22222",
    "0323": "임광훈 생일 33333",
    "0324": "임광훈 생일 44444",
    "0325": "임광훈 생일 55555",
    "0326": "임광훈 생일 66666",
    "0327": "임광훈 생일 77777"
  }
  
  let now = new Date();
  const today = ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2);
  
  if ( birthday_list[today] != undefined ) {
    apiToken = process.env.SLACK_TOKEN
    const web = new WebClient(apiToken);
    // The current date
    const currentTime = new Date().toTimeString();

    (async () => {

      try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: '#oomool_dev',
          text: birthday_list[today] + "님 오늘 생일입니다.",
        });
        console.log('Message posted!');
      } catch (error) {
        if ( error.data.ok == false ) {
          job.stop();
          console.log(error.data.err);
          process.exit()
        }
      }

    })();

  }
}

// 정지 알림
const stopAlert = () => {
  job.stop();
  console.log('Cron Stopped.');
  process.exit()
}  
 
// CronJob(Cron 표현식, 실행할 함수, 종료 시 실행할 함수, 자동 시작 여부, TimeZone);

const job = new CronJob('00 30 9 * * *', task, stopAlert, false, 'Asia/Seoul');
// const job = new CronJob('*/2 * * * * *', task, stopAlert, false, 'Asia/Seoul');
job.start();



/*
setTimeout(() => job.start()   ,  3000); // App 실행 3초 후 Cron 시작
setTimeout(() => job.stop()    , 13000); // Cron 시작 10초 후 Cron 정지
setTimeout(() => process.exit(), 15000); // Cron 정지 2초 후 App 종료
*/