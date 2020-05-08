$(function(){

  $('html').smoothScroll(300);

  $(window).on('scroll',function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>=100){
      $('header').addClass('active');
    }else{
      $('header').removeClass('active');
    }
  })


  //Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

})