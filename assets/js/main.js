
(function(){

  $('.submenu-toggle').click(function(e){
    e.stopPropagation();
    $(this).children('.dropdown-submenu').toggleClass('show');
  });

})();

(function(){

  $("#owl").owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    items: 1,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 400,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',  
  });

})();

(function(){

  var today = new Date();
  var year = today.getFullYear();
  $('.copyright span').text(year);
  
})();

(function(){

  $('.slider').hover(function(){
    $('.owl-prev, .owl-next').stop().fadeToggle(300); 
  });

})();


$('.footer-item').animated('slideInUp');
$('.slide-content').animated('fadeInDown');

