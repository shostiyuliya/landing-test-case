$('.hamburger-navigation').click(() => {
  $('.navigation-container').toggleClass('navigation-active');
} );

$('.navigation-left > div, .navigation-right div, button').click(() => {
  $('.navigation-container').removeClass('navigation-active');
});

$(window).on('load resize', () => {
  const width = $(document).width();

  if (width > 768) {
    $('.title-section').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
    });
  } else {
    if($('.title-section').hasClass('slick-initialized')) {
      $('.title-section').slick('unslick');
    }
  }
});


