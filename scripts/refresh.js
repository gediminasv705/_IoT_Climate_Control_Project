$("#refresh").click(function(){
    netatmoDataInit();
})

setInterval(function(){ 
    netatmoDataInit(); 
}, 5000);