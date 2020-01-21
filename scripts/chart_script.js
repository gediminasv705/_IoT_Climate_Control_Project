
document.getElementById("graph-answer").innerHTML = "Laukiama užklausos...";
$("#refresh-graph").click(function() {
  netatmoGraph();
});

netatmoGraph();

  function Unix_timestamp(t)
  {
  var dt = new Date(t*1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return hr+ 'h';  
  }

  function netatmoGraph() {
    document.getElementById("graph-answer").classList.remove("red-text");
    document.getElementById("graph-answer").classList.remove("green-text");
    document.getElementById("graph-answer").innerHTML = "Siunčiama užklausa...";

    var url = "scripts/netatmo_getter.php";
    var getPath = "/api/getroommeasure";
    var obj = {
      scope: "read_thermostat",
      path: getPath,
      reason: "graph_data"
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {

        decodedData = JSON.parse(data);

        if (decodedData.status == 'ok'){
            document.getElementById("graph-answer").innerHTML = "Duomenys gauti";
            document.getElementById("graph-answer").classList.remove("red-text");
            document.getElementById("graph-answer").classList.add("green-text");


        
        timeArray = [];
        tempArray = [];

        for (let [timeStamp, temperature] of Object.entries(decodedData.body)) {
            //console.log(`${key}: ${value}`);
            timeArray.push(Unix_timestamp(timeStamp));
            tempArray.push(temperature['0']);

          }

        chart(timeArray,tempArray);

        } else {
            document.getElementById("graph-answer").innerHTML = "Serveris duomenų nepateikė";
            document.getElementById("graph-answer").classList.remove("green-text");
            document.getElementById("graph-answer").classList.add("red-text");
        }
      
    });
  }


function chart(timeArray, tempArray){

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        //labels: ['1', '5', '6', '8', '11', '20'],
        labels: timeArray,
        datasets: [{
            label: 'Measured temperature changes',
            //data: [12, 19, 3, 5, 2, 3],
            data: tempArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    min: 20,
                    max: 27,
                    stepSize: 1
                }
            }]
        }
    }
});

}