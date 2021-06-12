$(function(){
  // ===========banner-slider==========
  $('.banner-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',
    fade:true,
    speed:1000,
  });
  // ===========gallery-main-slider==========
  $('.gallery-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    speed:1000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }




    ]
  });
  // ===========service-slider==========
  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:true,
    speed:1000,
    vertical:true,
    verticalSwiping:true,
    centerMode:true,
    centerPadding:false,
    prevArrow:'.up',
    nextArrow:'.down',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }




    ]
  });
  
  $('.service-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:true,
    speed:1000,
    vertical:true,
    verticalSwiping:true,
    centerMode:true,
    centerPadding:false,
    prevArrow:'.upp1',
    nextArrow:'.downn1',
  });

  // ===========veno box- here==========
  $('.venobox').venobox(); 

  // ===========feedback-slider==========
  $('.feed-slider-desc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:1000,
    asNavFor: '.feed-slider-img'
  });
  $('.feed-slider-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feed-slider-desc',
    arrows: true,
    centerMode: true,
    centerPadding:false,
    vertical:true,
    verticalSwiping:true,
    prevArrow:'.up1',
    nextArrow:'.down1',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping:false,
       
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping:false,
       
        }
      }




    ]
  });

  // ==========team-main-slider==========
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    speed:1000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
         
       
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
       
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
       
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
       
        }
      }




    ]
  });
  // ===========counter==========
  $('.counter').counterUp({
    delay: 5,
    time: 1000
  });
  // ===========client-logo-slider==========
  $('.client-logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    speed:1000,
    centerMode: true,
    centerPadding:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
         
       
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
       
        }
      }




    ]
  });



  // ===========down-to-up-slider==========
  // scroll up--------------------------------------------
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 250){
          $(".down-to-top").fadeIn();
      }
      else {
          $(".down-to-top").fadeOut();
      }
  });

    // scroll nav bar----
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 150){
          $('.navbar').addClass('nav-bg');
      }
      else {
          $('.navbar').removeClass('nav-bg');
      }
    });

    //  animation scroll js-------------------------

    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 500);
                return false;
            }
        }
    });
    var html_body = $('html, body');
    $('.side-slide a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 500);
                return false;
            }
        }
    });

  // ===========slide menu==========
    $('.slide-openbar').click(function(){
      $('.side-slide').toggleClass('menu-open');
      $('.slide-openbar i').toggleClass('fa-bars');

    });

  
  
  // ===========spy-scroll-slider==========

  var elm = document.querySelector('#main-header');
  var ms = new MenuSpy(elm);
  var elm = document.querySelector('#navbarSupportedContent');
  var ms = new MenuSpy(elm);

  //  preloader--------------------------------------

  $(window).on('load',function(){
    $('.preloader12').delay(500).fadeOut(500);
 });
  //  https://loading.io/

  // ===========Wow js-slider==========
    new WOW().init();
  // ===========Wow js-slider==========


});
