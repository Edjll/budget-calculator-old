
function load() {
	setTimeout(function() {
		preloader.setAttribute('class', 'loaded');
			setTimeout(function() {
			preloader.remove();
		}, 1000);
	}, 1500);
}


load();