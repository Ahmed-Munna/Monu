$(document).ready(function(){

    // Mobile_Menu_side_bar
    $(".fa-bars").on({
        click : function(){
            $(".fa-times").show();
            $(this).hide();
            $(".main-menu").addClass("active");
            $(".overlay").addClass("add-overlay")
        },
    });
    $(".fa-times").on({
        click : function(){
            $(".fa-bars").show();
            $(this).hide();
            $(".main-menu").removeClass("active");
            $(".overlay").removeClass("add-overlay")
        },
    });
    // overay___
    $(".overlay").on({
        click : function(){
            $(this).removeClass("add-overlay");
            $(".main-menu").removeClass("active");
            $(".fa-times").hide();
            $(".fa-bars").show();
        },
    });
// active_slider
$(".active-slider").slick({
    infinity:true,
    cssEase:'linear',
    autoplay:true,
    speed:400,
    arrows:false,
    slideToShow:2,
})

// counterUp

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// testimonial

$(".active-testimonial").slick({
    infinity:true,
    cssEase:'linear',
    autoplay:true,
    speed:400,
    arrows:false,
    slideToShow:2,
    dots:true,
})












})