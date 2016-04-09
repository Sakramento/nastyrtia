$(document).ready(function() {

	var $mainHeader = $('.main-header'); 
		var getHeaderHeight = $mainHeader.outerHeight();
		var $body = $('body');
		
		var borderAmount = 2;
		var lastScrollPosition = 0;

		$mainHeader.css('top', '-' + (getHeaderHeight+borderAmount) + 'px');

		$(window).scroll(function() {

			var currentScrollPosition = $(this).scrollTop();

			if ($(this).scrollTop() > 2 * (getHeaderHeight+borderAmount)) {
				$body.addClass('scrollActive').css('padding-top', getHeaderHeight);
				$mainHeader.css('top', 0);

				if (currentScrollPosition < lastScrollPosition) {
					$mainHeader.css('top', '-' + (getHeaderHeight+borderAmount) + 'px');
				}

				lastScrollPosition = currentScrollPosition;
			} else {
				$body.removeClass('scrollActive').css('padding-top', 0);
			}
		});//end scroll
}); //end ready

		