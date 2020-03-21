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
        
     $("#page1").click(function(){
        $(".page2").css("display","none");
        $(".page1").css("display", "block");
    });

    $("#page2").click(function(){
        $(".page2").css("display","block");
        $(".page1").css("display", "none");
    });
});