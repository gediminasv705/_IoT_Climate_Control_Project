$("#refresh").click(function(){
    netatmoDataInit();
})

setInterval(function(){ 
    netatmoDataInit(); 
}, 2000);