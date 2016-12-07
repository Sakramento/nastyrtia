$(document).ready(function() {

	var $welcome = $('.welcome'),
			$header = $('.header'),
      headerHeight = $header.outerHeight(),
      lastScrollPosition = 0,
      borderAmount = 2,
      $body = $('body'),
			$hamburger = $('.hamburger'),
			$mobileMenu = $('.mobile-menu'),
      $btnCloseMobileMenu = $('.mobile-menu__item--close'),
			welcomePadding = Number(($(window).height() - $header.height() - $body.find('.welcome__title').height() - $body.find('.welcome__desc').height() - 30) / 2);

  function welcomeHeight() {
  	var welcomePadding = Number(($(window).height() - $header.height() - $body.find('.welcome__title').height() - $body.find('.welcome__desc').height() - 30) / 2);
    $welcome.css({
  		'padding-top': welcomePadding,
      'padding-bottom': welcomePadding
  	});
  }

  welcomeHeight();

  /*------window resize eventHandler------*/
	$(window).resize(function() {
    welcomeHeight();
  });

	/*------hamburger eventHandler------*/
	$hamburger.on('click', function() {
    $mobileMenu.css({'top': '0'});
	});

  /*------hide mobile menu eventHandler------*/
  $btnCloseMobileMenu.on('click', function() {
    $mobileMenu.css({'top': '-100%'});
  });

  /*------fixed header eventHandler------*/
  $header.css('top', '-' + (headerHeight+borderAmount) + 'px');

  $(window).scroll(function() {
    var currentScrollPosition = $(this).scrollTop();

    if ($(this).scrollTop() > 2 * (headerHeight+borderAmount)) {
      $body.addClass('scrollActive').css('padding-top', headerHeight);
      $header.css('top', 0);

      if (currentScrollPosition < lastScrollPosition) {
        $header.css('top', '-' + (headerHeight+borderAmount) + 'px');
      }

      lastScrollPosition = currentScrollPosition;
    } else {
      $body.removeClass('scrollActive').css('padding-top', 0);
    }
  });

}); //end ready
