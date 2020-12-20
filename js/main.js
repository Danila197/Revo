$('.hero__slider').slick({
  arrows: false,
  fade:true,
  // centerMode: true,
  // variableWidth: true,
  // centerPadding:'30%'
  autoplay: true,
})

$('.choose-slider').slick({
  arrows: true,
  slidesToShow: 2,
  infinite: false,
  rows:2,
  //centerMode: true,
  // variableWidth: true,
  // centerPadding:'30%'
  // autoplay:true
  responsive: [
    {
      breakpoint: 1306,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:1,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        rows: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$('.combo-slider').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // variableWidth: true,
  // centerPadding:'30%'
  // autoplay:true
   responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 784,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
const logo = document.querySelector('.top__logo')

$(".burger-menu").on("click", function() {
  $(this).toggleClass("burger-menu--active");
  $('.menu').toggleClass('menu-active');
  $('.slider').toggleClass('slider-active');

  $('body').toggleClass('lock')
});

$(window).resize(function(e) {
  let width = e.target.innerWidth
  if (width < 700) {
    // logo.innerHTML = '<img class="top__logo-img" src="./img/logo-w.png" alt="" />'
    $(".top__logo-img").attr("src","./img/logo-w.png");
  } else {
    // logo.innerHTML = '<img class="top__logo-img" src="./img/logo.png" alt="" />'
    $(".top__logo-img").attr("src","./img/logo.png");
  }
});
