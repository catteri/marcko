$(function(){

    $('.top__slider-inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead:2000
    });

    $('.star').rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        rateFill: "#ffc35b",
        numStars: 5,
        readOnly:true
        
    });

});