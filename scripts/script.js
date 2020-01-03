
////Čia prikabinu meniu, kai nuvažiuoja į viršų

$('document').ready(function () {

    var navbar = document.getElementById("navbar");
    navbarPosition = navbar.offsetTop;

    console.log(navbarPosition);


    window.addEventListener("scroll", function (e) {

        var scroll = this.scrollY;

        console.log(scroll);


        if (scroll > navbarPosition) {

            navbar.classList.add("meniu-fixed");
            console.log("fixed");

        } else {

            navbar.classList.remove("meniu-fixed");
            console.log("not fixed");

        }
    });











});


