var monthArray;

function deleteElements() {
	var pArray = document.getElementsByClassName('element');
	if (pArray.length != 0) {
		i = pArray.length;
		while (i) {
			pArray[i - 1].parentNode.removeChild(pArray[i - 1]);
			i--;
		}
	}
}

function selectMonthArray() {
	if (language == 'en') {
		monthArray = monthArrayServer;
	} else {
		monthArray = monthArrayUser;
	}
}

function newDate() {
	deleteElements();
	selectMonthArray();
	monthSave = monthArrayServer[monthArray.indexOf(month.value)];
	yearSave = year.value;
	saveSettings();
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance') == null) {
		balance = 0;
	} else {
		balance = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance'));
	}
	loadLocalStorage();
}

function click(where) {
	selectMonthArray();
	if (monthArray.indexOf(month.value) + where < 12 && monthArray.indexOf(month.value) + where >= 0) {
		month.value = monthArray[monthArray.indexOf(month.value) + where];
	} else if (month.value == 'Декабрь' || month.value == 'December') {
		month.value = monthArray[0];
		year.value = Number(year.value) + where;
	} else if (month.value == 'Январь' || month.value == 'January') {
		month.value = monthArray[11];
		year.value = Number(year.value) + where;
	}
	newDate();
}

nextMonth.onclick = function() {
	click(1);
}
backMonth.onclick = function() {
	click(-1);
}