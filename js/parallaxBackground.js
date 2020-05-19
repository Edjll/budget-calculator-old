
function parallax() {
	window.onmousemove = function() {
			var mouseY = event.clientY;
			var mouseX = event.clientX;
			background.style.transform = 'scale(1.2) translate(' + mouseX / 24 + 'px, ' + mouseY / 24 + 'px)';
	}
}