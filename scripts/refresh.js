$("#refresh").click(function(){

    console.log("manual refresh netatmo data");
    netatmoDataInit();
})

setInterval(function(){ 
    console.log("auto refresh netatmo data");
    netatmoDataInit(); 
}, 10000);