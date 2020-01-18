
function refresh(){

$("#refresh").click(function(){
    netatmoConnectionInit();
})

setInterval(function(){ 
    netatmoConnectionInit();
}, 10000);

}