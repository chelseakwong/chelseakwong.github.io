var cbpAnimatedHeader = (function() {
    $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.cbp-af-header').addClass('cbp-af-header-shrink');
  } else {
    $('.cbp-af-header').removeClass('cbp-af-header-shrink');
  }
});
})();