const birthday_list = {
  "0322": "임광훈 생일 11111",
  "0323": "임광훈 생일 22222",
  "0324": "임광훈 생일 33333",
}

let now = new Date();
//let today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
const today = ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2);

//console.log( ( today != undefined ), ( today == birthday_list[today] ), today, birthday_list[today] );
if ( birthday_list[today] != undefined ) {
  console.log(birthday_list[today]+"님 오늘 생일입니다.");
}

 