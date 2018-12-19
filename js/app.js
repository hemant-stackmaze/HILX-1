$(document).foundation();

$(document).ready(function() {

  var winHeight = $(window).height();
  var winWidth = $(window).width();
  var dotNavClicked = false;

  
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
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // collections slider
  var collections = $('.collections');

  if(collections.length) {
    var collectionHeight = collections.height();
    var collectionsTop = collections.offset().top;
    var collectionsBottom = collectionsTop + collectionHeight;
  }

  $('.collection').height(winHeight);
  console.log(collectionsTop);

  $(window).scroll(function() {

    var winScrollTop = $(this).scrollTop();

    if(winScrollTop >= collectionsTop) {
      $('.collections').addClass('isActive');
    } else {
      $('.collections').removeClass('isActive');
    }

    $('.collection').each(function() {
      var collection = $(this);      
      
      if(winScrollTop >= collection.offset().top && !collection.hasClass('isActive')) {        
        var collectionIndex = collection.data('collection-index');
        $('.collection').removeClass('isActive');
        collection.addClass('isActive');

        $('.item').removeClass('isActive');
        var navItem = $('.item[data-collection-nav-index="'+ (collectionIndex) +'"]');

        navItem.addClass('isActive');
      } 
    });
  });

  // collection nav dots
  $('[data-collection-nav-item]').on('click', function() {
    dotNavClicked = true;
    var collectionIndex = $(this).data('collection-nav-index');
    console.log('Nav:' + collectionIndex);
    console.log($('.collection').eq(collectionIndex).data('collection-index'));
    var targetCollectionTop = $('.collection').eq(collectionIndex).offset().top;
    $('html, body').animate({scrollTop: targetCollectionTop + 1}, 500, function() {
      dotNavClicked = false;
      console.log('scroll complete...');
    });
  });

  //video-section video play
  $('.video-section .play-video-btn').click(function() {
    console.log('Playing video...');
    $(this).siblings('video').get(0).play();
  });

  var video = $("video");

  video.on('play', function () {
    $('.play-video-btn').hide();
  });

  video.on('pause', function () {
    $('.play-video-btn').show();
  });

  //product customizer
  $('.options-toggle').on('click', function() {
    var toggle = $(this);
    var target = toggle.data('target');
    var targetId = '#' + target; 

    $('.options-toggle').removeClass('active');
    toggle.addClass('active');

    $('.customizer-option').removeClass('active');
    $(targetId).addClass('active');

    //toggle options as fixed sidebar in mobile
    if (winWidth < 1024) {
      $('body').css('overflow', 'hidden');
      $('.customizer-options-wrapper .options-inner').toggleClass('visible');
    }
  });

  //close product customizer options
  $('#customizer-options-mobile-close-btn').click(function() {
    $('.customizer-options-wrapper .options-inner').removeClass('visible');
    $('body').css('overflow', 'auto');
  });

  //image compare
  if($('.image-compare').length) {
    $('.image-compare .images').twentytwenty(); 
  }

  $(window).on('resize', function() {    
    winWidth = $(window).width();  
    navAppend(winWidth);      
  });
  
  
  //append main nav items to flyout nav in tablet and mobile
  function navAppend(w) {
    var nav = $('.top-nav');

    if (w < 1024 && !$('#flyout-menu .top-nav').length) {
      nav.prependTo('#flyout-menu');
      nav.find('.mega-menu-target').hide();
    } 

    if (w > 1023 && !$('.top-nav-wrapper .top-nav').length) {
      nav.prependTo('.top-nav-wrapper');
      nav.find('.mega-menu-target').show();
    } 
  }
  navAppend(winWidth);

  //mega menu toggle in mobile
  $('.mega-menu-toggle').on('click', function() {
    if (winWidth < 1024) {
      $(this).siblings('.mega-menu-target').slideToggle(500);
    }
  });

  //toggle flyout menu
  $('#flyout-menu-toggle').on('click', function() {
    $('#flyout-menu').toggleClass('visible');
  });

  //page nave width
  $('.page-nav nav').width($('.page-nav nav').width());

  //product single sticky menu
  $(window).scroll(function() {
    if ($(this).scrollTop()>300)
    {
      $('.product-single-sticky-menu').show();
    }
    else
    {
    $('.product-single-sticky-menu').hide();
    }
  });
    /* window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    } */
  $(document).ready(function() {
    var stickyNavTop = $('#nav').offset().top;
    var stickyNav = function(){
      var scrollTop = $(window).scrollTop(); 
      if (scrollTop > stickyNavTop) { 
        $('#nav').addClass('sticky');
      } else {
        $('#nav').removeClass('sticky'); 
      }
    };
    stickyNav();
    $(window).scroll(function() {
      stickyNav();
    });
  }); 

});