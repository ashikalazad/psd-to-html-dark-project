$(document).ready(function ($) {

  // OwlCarousel Area Start

  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
    dots: true,
    loop: true
  });

  // OwlCarousel Area End

  //  Stick Top Area Start

  $(window).scroll(function() {    

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".stick-area").addClass("is-stick");
    } else {
      $(".stick-area").removeClass("is-stick");
    }
  });

});

  //  Stick Top Area End 

  //  Progress Bar Area Start 

  $('.progress').asProgress({
    'namespace': 'progress'
  });
  $('#button_start').on('click', function() {
    $('.progress').asProgress('start');
  });
  $('.button_reset').on('click', function() {
    $('.progress').asProgress('reset');
  });

  //  Progress Bar Area End

});
