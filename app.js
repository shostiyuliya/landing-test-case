$('.hamburger-navigation').click(() => {
  $('.navigation-container').toggleClass('navigation-active');
} );

$('.navigation-left > div, .navigation-right div, button').click(() => {
  $('.navigation-container').removeClass('navigation-active');
});

$(window).resize(() => {
  const width = $(document).width();

  if (width < 768) {
    $('.title-section').slick('unslick');
  } else {
    $('.title-section').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
    });
  }
});

/*$(document).ready(() => {
  $('.title-section').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      },
      {
        breakpoint: 1400,

      }
    ],
    dots: true,
    arrows: false,
  })
})*/
