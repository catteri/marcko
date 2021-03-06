$(function () {

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product__item').addClass('product__item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product__item').removeClass('product__item--list');
  });
  
  $('.select-style').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__from').text(data.to);
        },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__from').text(data.to);
        },

  });

  

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

    function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);
    
/*     const deadline = '2021-05-25';
initializeClock('promo__clock', deadline); */

});