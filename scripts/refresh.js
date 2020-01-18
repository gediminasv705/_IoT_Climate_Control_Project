
function refresh(){

$("#refresh").click(function(){
    netatmoGetInit();
    sensiboGetInit();
})

setInterval(function(){ 
    //netatmoGetInit();
    //sensiboGetInit();
}, 4000);

}