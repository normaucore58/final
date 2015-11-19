var fixedNav = $("#fixedNav");
var introHeight = $('.intro').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > introHeight ) {
    fixedNav.addClass("fixed");
  } else {
    fixedNav.removeClass("fixed");
  }
});
