//Suformatuoja console.log antraštes
function logFormatter(message) {

var date = new Date();
var time = ' [ ' +
  date.getHours() +
  ':' +
  date.getMinutes() +
  ':' +
  date.getSeconds() +
  ' ] ';

    console.log("%c" + time + message, 'background: #ff5349; color: #fff; font-family: "Times New Roman", Times, serif; text-size: 15pt; margin: 5pt  0 5pt 0; font-size: 15px;');
}
