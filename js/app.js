$(document).foundation();

$(document).ready(function() {
  
  //best seller slider
  $('.best-sellers-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slideToScroll: 1,
    arrows: true,
    prevArrow: '<img class="prev" width="48px" src="../assets/icons/arrow_left.svg" alt="Previous Slide">',
    nextArrow: '<img class="next" width="48px" src="../assets/icons/arrow_right.svg" alt="Next Slide">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});