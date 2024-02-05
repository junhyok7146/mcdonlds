let ww = $(window).width()
if (ww>910) {
    $("html").addClass("pc")
}else{
    $("html").addClass("mobile")
}

$('.slideinner').slick({
    autoplay: true, 
    autoplayspeed: 4000, 
    dots: true, 
    speed: 500, 
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="previous" type="button"><i class="far fa-caret-square-left"></i></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="far fa-caret-square-right"></i></i></button>'
});
$(".slideouter .plapau i").on("click", function(){
if( $(this).hasClass("fa-pause")){
$(".slideinner").slick("slickPause");
$(this).removeClass("fa-pause").addClass("fa-play");
}   else{ 
$(".slideouter .plapau i").removeClass("fa-pause").addClass("fa-play");
$(this).removeClass("fa-play").addClass("fa-pause");
}

});

// $("#nav .depth1 > li").on("mouseover mouseout",function(){
//     if($("html").hasClass("pc")){
//         $(this).toggleClass("on")
//     }
// });
$("#nav .depth1 > li").on("click",function(){
    if($("html").hasClass("mobile")){
        $(this).toggleClass("on")
        $(this).siblings().removeClass("on")
    }
});
$(document).ready(function () {
    $("#header .row .menuopen").click(function () {
      $("#header #nav ul.depth1").toggleClass("on");
    });
  });
