$(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button class = "slick-arrow slick-prev"><img class="slick-prev-img" src="images/arrows/previous.svg" alt="arrow"></button>',
    nextArrow: '<button class = "slick-arrow slick-next"><img class="slick-next-img" src="images/arrows/next.svg" alt="arrow"></button>',
    arrows: true,
    asNavFor: '.thumbs'

  });

  $('.thumbs').slick({
    arrows: false,
    prevArrow: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 3,
          
        
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
      
        }
      }
    ]
  });

  $('.header__menu-btn').on('click',function(){
    $('.nav__list').slideToggle();

    $('nav__link').on('click', function(){
      $('.nav__list').slideUp();
        })
  });


});