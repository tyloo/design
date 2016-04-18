jQuery(document).ready(function ($) {
  /* Mobile Menu */
  var $toggle = $('#header-toggle');
  var $menu = $('#header-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
  /* /Mobile Menu */

  /* Scroll Top Detect */
  var header = $('.header');
  computeMenuDesktop($(window).scrollTop(), $('.header'));

  $(window).scroll(function() {
    computeMenuDesktop($(this).scrollTop(), $('.header'));
  });
  /* /Scroll Top Detect */
});


function computeMenuDesktop(value, header) {
  if(value >= 70) {
    header.addClass('header-sticky-scrolled');
  } else {
    header.removeClass('header-sticky-scrolled');
  }
}
