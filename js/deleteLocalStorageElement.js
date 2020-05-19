function deleteElements() {
	var activeButton = event.target,
		index = 1;
		console.log(activeButton.tagName);
	if (activeButton.tagName != 'BUTTON' && activeButton.tagName != 'DIV') {
		return;
	}
	var previosElement;
	if (activeButton.tagName == 'DIV') {
		previosElement = activeButton.parentNode.parentNode.previousSibling;
	} else {
		previosElement = activeButton.parentNode.previousSibling;
	}
	while (previosElement != null) {
		previosElement = previosElement.previousSibling;
		index++;
	}
	while (localStorage.getItem(userSave + '_' + monthSave + '_' + yearSave + '_' +  this.id.replace('Elements', '') + '_' + index) == null) {
		index++;
	}
	var localStorageKey = userSave + '_' + monthSave + '_' + yearSave + '_' +  this.id.replace('Elements', '') + '_' + index;
	var localStorageValue = localStorage.getItem(localStorageKey);
	if (this.id == 'incomeElements') {
		balance -= Number(localStorageValue);
		balanceAll -= Number(localStorageValue);
	} else {
		balance += Number(localStorageValue);
		balanceAll += Number(localStorageValue);
	}
	localStorage.setItem(userSave + '_' + monthSave + '_' + yearSave + '_' + 'balance', balance);
	localStorage.setItem(userSave + '_' + 'balance', balanceAll);
	textDisplay.innerHTML = balance;
	balanceAllTime.innerHTML = balanceAll;
	localStorage.removeItem(localStorageKey);
	if (activeButton.parentNode.tagName != 'LI') {
		activeButton.parentNode.parentNode.remove();
	} else {
		activeButton.parentNode.remove();
	}	
}

incomeElements.onclick = deleteElements;
costsElements.onclick = deleteElements;