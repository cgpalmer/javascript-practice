$(document).ready(function () {
    $("#btn-dark").on("click", function () {
        $("body").addClass("body-dark");
        $("nav").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
        $("button").removeClass("btn-light").addClass("btn-dark");
        $("footer").removeClass("footer").addClass("footer-dark");
        $("a").removeClass("anchor-styling").addClass("anchor-styling-dark");
    });

    $("#btn-light").on("click", function () {
        $("body").removeClass("body-dark");
        $("nav").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
        $("button").removeClass("btn-dark").addClass("btn-light");
        $("footer").removeClass("footer-dark").addClass("footer");
        $("a").removeClass("anchor-styling-dark").addClass("anchor-styling");
    });
});