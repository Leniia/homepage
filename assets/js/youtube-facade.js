(function () {
	'use strict';

	function activateFacade(facade) {
		if (facade.classList.contains('is-loaded')) {
			return;
		}

		var videoId = facade.getAttribute('data-youtube-id');
		var videoTitle = facade.getAttribute('data-youtube-title') || 'YouTube-Video';

		if (!videoId) {
			return;
		}

		var iframe = document.createElement('iframe');
		iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1';
		iframe.title = videoTitle;
		iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
		iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('loading', 'lazy');

		facade.classList.add('is-loaded');
		facade.appendChild(iframe);
	}

	function init() {
		var facades = document.querySelectorAll('.youtube-facade');

		facades.forEach(function (facade) {
			var button = facade.querySelector('.youtube-facade__play');

			if (!button) {
				return;
			}

			button.addEventListener('click', function () {
				activateFacade(facade);
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
