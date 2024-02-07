let ww = $(window).width()
if (ww>910) {
    $("html").addClass("pc")
}else{
    $("html").addClass("mobile")
}
 //==================================================================================   
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
 //==================================================================================   
$("#nav .depth1").on("mouseover mouseout",function(){
    if($("html").hasClass("pc")){
        $(this).find(".depth2").stop().slideToggle(200)
        $(".bgbox").stop().slideToggle(200)
    }
});
 //==================================================================================   
$("#nav .depth1 > li").on("click",function(){
    if($("html").hasClass("mobile")){
        $(this).toggleClass("on")
        $(this).siblings().removeClass("on")
    }
});
 //==================================================================================   
$(document).ready(function () {
    $("#header .row .menuopen").click(function () {
      $("#header #nav ul.depth1").toggleClass("on");
    });
  });

  $(document).ready(function(){
 //==================================================================================   
    $('#section .contact .position li').click(function(){
        var backgroundColor = $(this).css('background-color');
        var color = $(this).css('color');  
        $(this).css({'background-color': color, 'color': backgroundColor});
    });  
    $('#section .contact .position li').click(function(){
        var img = $(this).find('img'); 
        var filterValue = img.css('filter');     
        if (filterValue === 'none') {
            img.css('filter', 'brightness(3000%)');
        } else {
            img.css('filter', 'none');
        }
    });
});
 //==================================================================================  
