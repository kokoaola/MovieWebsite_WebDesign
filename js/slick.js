$(document).ready(function () {
  var $slider = $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    mobileFirst: true,
    speed: 300,
    swipeToSlide: true,
    // fade: true,

    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow: "<button type='button' class='slick-next'>Next</button>"

   


    // prevArrow: "<img src='/img/angles-left-solid.svg' fill=red; class='slick-prev  prev-arrow' width='50px' height='auto'>",
    // nextArrow: "<button type='button' class='slick-next  next-arrow'>Next</button>"

    prevArrow: "<button type='button' class='slick-prev  prev-arrow'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next  next-arrow'>Next</button>"
  });

  var $tabs = $('.tab');
  $tabs.click(function () {
    $tabs.removeClass('active-tab');
    $(this).addClass('active-tab');
    $slider.slick('slickGoTo', $(this).data('slide'));
  });

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $tabs.removeClass('active-tab');
    $($tabs.get(nextSlide)).addClass('active-tab');
  });

  // Initialize
  $($tabs.get(0)).addClass('active-tab');
});