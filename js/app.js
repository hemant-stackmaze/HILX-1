$(document).foundation();

$(document).ready(function() {

  var winHeight = $(window).height();
  
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

  //collections slider
  var collections = $('.collections');

  if(collections.length) {
    var collectionHeight = collections.height();
    var collectionsTop = collections.offset().top;
    var collectionsBottom = collectionsTop + collectionHeight;
  }

  $('.collection').height(winHeight);
  //console.log(collectionsTop);


  $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();

    if(winScrollTop >= collectionsTop) {
      $('.collections').addClass('isActive');
      //console.log(1);
    } else {
      $('.collections').removeClass('isActive');
      //console.log(collectionsTop);
      //console.log(winScrollTop);
    }

    $('.collection').each(function() {
      var collection = $(this);      
      
      if(winScrollTop >= collection.offset().top && !collection.hasClass('isActive')) {        
        var collectionIndex = collection.data('collection-index');
        $('.collection').removeClass('isActive');
        collection.addClass('isActive');

        $('.item').removeClass('isActive');
        var navItem = $('.item[data-collection-nav-index="'+ collectionIndex +'"]');

        if(!navItem.hasClass('isActive')) {
          navItem.addClass('isActive');
        }
        
      } 
    });

    //check if collections is in viewport
    if (winScrollTop >= collectionsTop && winScrollTop <= collectionsBottom) {
      //console.log('Collection in view port');
    } else {
      //console.log('Collection outside view port');
    }
  });

});