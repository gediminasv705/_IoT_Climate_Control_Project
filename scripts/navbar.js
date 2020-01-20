//Navbar prikabinimas prie viršaus ir puslapio nuvažiavimas pagal meniu pasirinkimą
function navbarScroll() {
  var navbar = document.getElementById("navbar");
  var topRow = document.getElementById("top-row");
  var navbarPosition = navbar.offsetTop;

  var page_1 = document.getElementById("page-1");
  var page_1_nav = document.getElementById("page-1-nav");
  var page1Position = page_1.offsetTop;

  var page_2 = document.getElementById("page-2");
  var page_2_nav = document.getElementById("page-2-nav");
  var page2Position = page_2.offsetTop;

  var page_3 = document.getElementById("page-3");
  var page_3_nav = document.getElementById("page-3-nav");
  var page3Position = page_3.offsetTop;

  var page_4 = document.getElementById("page-4");
  var page_4_nav = document.getElementById("page-4-nav");
  var page4Position = page_4.offsetTop;

  var page_5 = document.getElementById("page-5");
  var page_5_nav = document.getElementById("page-5-nav");
  var page5Position = page_5.offsetTop;

  window.addEventListener("scroll", function(e) {
    var scroll = this.scrollY;

    if (scroll > navbarPosition) {
      navbar.classList.add("meniu-fixed");
      topRow.classList.add("top-row-fixed");
    } else {
      navbar.classList.remove("meniu-fixed");
      topRow.classList.remove("top-row-fixed");
    }

    var y = 400;
    // kiek px anksčiau užregistruos puslapio pasikeitimą

    if (scroll >= page1Position && scroll < page2Position - y) {
      page_1_nav.classList.add("nav-item-filter");
    } else {
      page_1_nav.classList.remove("nav-item-filter");
    }

    if (scroll >= page2Position - y && scroll < page3Position - y) {
      page_2_nav.classList.add("nav-item-filter");
    } else {
      page_2_nav.classList.remove("nav-item-filter");
    }

    if (scroll >= page3Position - y && scroll < page4Position - y) {
      page_3_nav.classList.add("nav-item-filter");
    } else {
      page_3_nav.classList.remove("nav-item-filter");
    }

    if (scroll >= page4Position - y && scroll < page5Position - y) {

      page_4_nav.classList.add("nav-item-filter");
    } else {
      page_4_nav.classList.remove("nav-item-filter");
    }

    if (scroll >= page5Position - y) {
      page_5_nav.classList.add("nav-item-filter");
    } else {
      page_5_nav.classList.remove("nav-item-filter");
    }
  });
}
