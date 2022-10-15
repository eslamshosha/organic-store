$(window).load(function () {
  $(".preloader").fadeOut();
  // $("body").removeClass("overflow");
});

$(document).ready(function () {
  new WOW().init();
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    // $(".fixed-search .open-search").toggleClass("close-search");
    $("body").toggleClass("overflow");
  });

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".navgition").toggleClass("reset-left");
      $("body").addClass("overflow");
      $(".overlay-box2").fadeToggle(300);
    });
    $(".nav-head .close-btn, .overlay-box2").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".overlay-box2").fadeOut(300);
      $("body").removeClass("overflow");
    });
    //dropdown inside menu
    $(".lang-word").click(function (e) {
      e.preventDefault();
      var item = $(this).siblings(".dropdown-content");
      item.slideToggle(400);
    });
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-dispaly").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-dispaly").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
        $(".btn-div").not(this).removeClass("active");
      }
    });
  }
  $(" .add-chevron").addClass("chevron-down");
  //fixed nav
  $stickyNav = $("header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav");
    } else {
      $stickyNav.removeClass("fixed-nav");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav");
    }
  });
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyNav.addClass("fixed-header");
    } else {
      $stickyNav.removeClass("fixed-header");
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-header");
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ///////// ** product slider** /////////
  var slides = document.getElementsByClassName("product-slider");
  for (var i = 0; i <= slides.length; i++) {
    var productswiper = new Swiper(
      ".product-slider-" + i + " .swiper-container",
      {
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".product-slider-" + i + " .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".product-slider-" + i + " .swiper-btn-next",
          prevEl: ".product-slider-" + i + " .swiper-btn-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      }
    );
  }
  ///////// ** testimonials-section** /////////
  var specials = new Swiper(".testimonials-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-slider .swiper-btn-next",
      prevEl: ".testimonials-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  $("#myTabs a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
