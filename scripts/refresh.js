
function refresh(){

$("#refresh-data").click(function(){
    netatmoGetData();
    sensiboGetData();
})


// negaliu per dažnai siųsti užklausas dėl serverių apribojimų
setInterval(function(){ 
    //netatmoGetData();
    //sensiboGetData();
}, 10000);

}