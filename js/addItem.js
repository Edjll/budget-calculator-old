function addItem(id, element) {
	var htmlElement = document.getElementById(id);
	if (mobile == false) {
		if (element.keyCode != 13) {
			return;
		}
	}
	if (htmlElement.value.length > 0) {
		newLocal();
		htmlTagLi = document.createElement('li');
		htmlTagLi.setAttribute('class', 'element');
		htmlTagButton = document.createElement('button');
		htmlTagButton.setAttribute('class', 'deleteButton');
		htmlTagDiv = document.createElement('div');
		htmlTagDiv.setAttribute('class', 'stripDeleteButton');
		htmlTagButton.appendChild(htmlTagDiv);
		htmlTagButton.appendChild(htmlTagDiv.cloneNode(true));
		htmlTagP = document.createElement('p');
		htmlTagLi.appendChild(htmlTagP);
		htmlTagLi.appendChild(htmlTagButton);
		if (id == 'income') {
			balance 	+= Number(htmlElement.value);
			balanceAll 	+= Number(htmlElement.value);
			counter 	 = counterIncome;
		} else {
			balance 	-= Number(htmlElement.value);
			balanceAll 	-= Number(htmlElement.value);
			counter 	 = counterCosts;
		}
		balance 	= Math.round(balance * 100) / 100;
		balanceAll  = Math.round(balanceAll * 100) / 100;
		localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_balance', String(balance));
		localStorage.setItem(userSave + '_' + 'balance', String(balanceAll));
		htmlTagP.innerHTML = htmlElement.value;
		document.getElementById(id + 'Elements').appendChild(htmlTagLi);
		localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_' + id + '_' + counter, htmlElement.value);
		if (id == 'income') {
			counterIncome++;
			localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_counter_income', String(counterIncome));
		} else {
			counterCosts++;
			localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_counter_costs', 	String(counterCosts));
		}
	}
	htmlElement.value 		 = '';
	balanceAllTime.innerHTML = balanceAll;
	textDisplay.innerHTML 	 = balance;
}

income.onkeydown = function(element) {
	addItem('income', element);
}
costs.onkeydown  = function(element) {
	addItem('costs', element);
}

function newLocal() {
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_counter_income') 	== null) {
		localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_counter_income', 	'1');
	}
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_counter_costs') 	== null) {
		localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_counter_costs', 	'1');
	}
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance') 		== null) {
		localStorage.setItem(userSave + '_' + monthSave + '_' + year.value + '_balance', 		'0');
	}
	counterIncome = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_counter_income'));
	counterCosts  = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_counter_costs'));
	balance 	  = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance'));
}