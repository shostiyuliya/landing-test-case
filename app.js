$('.hamburger-navigation').click(() => {
  $('.navigation-container').toggleClass('navigation-active');
} );

$('.navigation-left > div, .navigation-right div, button').click(() => {
  $('.navigation-container').removeClass('navigation-active');
});

