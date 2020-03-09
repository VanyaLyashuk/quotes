/* Navigation */
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon-wrapper').classList.toggle('menu-icon-wrapper--active');
  document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
  document.querySelector('.nav').classList.toggle('nav--active');
};

/* Slick Slider*/
$(document).ready(function(){
  $('.main-slider').slick({
    arrows: false,
    adaptiveHeight: true,
    dots: true
  });

  $('.quotes-slider').slick({
    arrows: false,
    dots: true
  });

});
