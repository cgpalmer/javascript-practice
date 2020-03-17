$(document).ready(function () {
    $("button").on("click", function () {
        $("body").toggleClass("body-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(this).toggleClass("btn-dark");
        $(this).text(function(i, text){
          return text === "Light Mode" ? "Dark Mode" : "Light Mode";
        })
        $("footer").toggleClass("footer-dark");
        $("a").toggleClass("anchor-styling-dark");
    })
});