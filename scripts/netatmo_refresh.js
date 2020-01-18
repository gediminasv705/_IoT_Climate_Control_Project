
function netatmoRefresh(){

$("#refresh").click(function(){
    netatmoConnectionInit();
})

setInterval(function(){ 
    netatmoConnectionInit();
}, 4000);

}