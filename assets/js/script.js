//Header Fixed

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


//Initialize VenoBox

$(window).on('load', function() {
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff',
    share: false
  });
});

//Initialize SuperFish

$('.navbar-nav').superfish({
  animation: {
    opacity: 'show'
  },
  speed: 400
});


//Navigation active state on Scroll

var nav_sections = $('section');
  var main_nav = $('.navbar-nav, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('nav-item');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('nav-item');
      }
      if (cur_pos < 300) {
        $(".navbar-nav li:first").addClass('nav-item');
      }
    });
  });
//Init AOS

function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});
})(jQuery);

//Back to Top

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

