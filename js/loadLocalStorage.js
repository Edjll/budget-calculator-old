function sortLocalStorage(){
    if(localStorage.length > 0){
      	var localStorageArray = [];
      	for (i = 0; i < localStorage.length; i++){
          	localStorageArray[i] = {
          		key:    localStorage.key(i),
          		value: localStorage.getItem(localStorage.key(i)),
          	}
    	}
    }

    function sortArrayObject(a, b) {
    	if (a['key'] > b['key']) {
    		return 1;
    	}
    	if (a['key'] < b['key']) {
    		return -1;
    	}
    }

    sortLocalStorageArray = localStorageArray.sort(sortArrayObject);
}

function loadLocalStorage() {
	if (localStorage.length == 0) {
		return;
	}
	sortLocalStorage();
	for (var i = 0; i < localStorage.length; i++) {
		var localStorageElement = sortLocalStorageArray[i];
		htmlTagLi = document.createElement('li');
		htmlTagLi.setAttribute('class', 'element');
		htmlTagButton = document.createElement('button');
		htmlTagDiv = document.createElement('div');
		htmlTagDiv.setAttribute('class', 'stripDeleteButton');
		htmlTagButton.appendChild(htmlTagDiv);
		htmlTagButton.appendChild(htmlTagDiv.cloneNode(true));
		htmlTagP = document.createElement('p');
		htmlTagButton.setAttribute('class', 'deleteButton');
		htmlTagLi.appendChild(htmlTagP);
		htmlTagLi.appendChild(htmlTagButton);
		if (localStorageElement['key'].indexOf(userSave) == 0 && localStorageElement['key'].indexOf(monthSave) == userSave.length + 1 && (localStorageElement['key'].indexOf('_', userSave.length + monthSave.length + 2) - (userSave.length + monthSave.length + 2) == year.value.length) && localStorageElement['key'].indexOf(year.value) == userSave.length + monthSave.length + 2) {
			if (localStorageElement['key'].indexOf('income') == userSave.length + monthSave.length + 3 + year.value.length) {
				elementValue = localStorageElement['value'];
				htmlTagP.innerHTML = elementValue;
				incomeElements.appendChild(htmlTagLi);
			} 
			if (localStorageElement['key'].indexOf('costs') == userSave.length + monthSave.length + 3 + year.value.length) {
				elementValue = localStorageElement['value'];
				htmlTagP.innerHTML = elementValue;
				costsElements.appendChild(htmlTagLi);
			}
			if (localStorageElement['key'].indexOf('balance') == userSave.length + monthSave.length + 3 + year.value.length) {
				balance = Number(localStorageElement['value']);
			}
		}
	}
	balanceAllTime.innerHTML = balanceAll;
	textDisplay.innerHTML 	 = balance;
}

loadLocalStorage();