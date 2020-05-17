$(function(){

    $('.slider__inner').slick({
        asNavFor: '.slider__mini',
        nextArrow: '<button class="slick-arrow slick-next"><img src="image/next.png" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="image/previous.png" alt="prev arrow"></button>',
        arrows: true,
        
    });

    $('.slider__mini').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        
    });

  });

  $('.header__menu-btn').on('click', function(){
      $('.header__menu ul').slideToggle();
  })