

function cleaningLocalStorage() {
	while(localStorage.length) {
		for (var i = 0; i < localStorage.length; i++) {
			localStorage.removeItem(localStorage.key(i));
		}
	}
}

cleaning.onclick = function() {
	cleaningLocalStorage();
	setSettings();
	deleteElements();
	textDisplay.innerHTML 	 = balance;
	balanceAllTime.innerHTML = '0';
}