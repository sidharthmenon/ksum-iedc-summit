import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import SmoothScroll from 'smooth-scroll';

window.$ = window.jQuery = jQuery;
window.bootstrap = bootstrap;
window.popper = popper;

var scroll = new SmoothScroll('a[data-scroll]');

$( '.hamburger-menu' ).on( 'click', function() {
  $(this).toggleClass('open');
  $('.site-navigation').toggleClass('show');
});

