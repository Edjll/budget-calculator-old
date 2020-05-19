function removeSymbol() {
	for (var i = 0; i < this.value.length; i++) {
		if ((this.value[i] < '0' || this.value[i] > '9') && this.value[i] != '.') {
			this.value = this.value.replace(this.value[i], '');
		}
		if (this.value[i] == '.' && this.value.indexOf('.') != i) {
			this.value = this.value.slice(0, i) + this.value.slice(i + 1);
		}
		if (this.value[i-2] == '.') {
			this.value = this.value.slice(0, i + 1);
		}
	}
}

income.oninput = removeSymbol;
costs.oninput = removeSymbol;

month.oninput = function() {
	console.log(language);
	for (var i = 0; i < this.value.length; i++) {
		if (language == 'ru' && (this.value[i] < 'А' || this.value[i] > 'я')) {
			this.value = this.value.replace(this.value[i], '');
		}
		if (language == 'ru' && this.value[0] > 'Я') {
			this.value = this.value[0].toUpperCase() + this.value.slice(1, this.value.length);
		}
		if (language == 'en' && (this.value[i] < 'A' || this.value > 'Z') && (this.value[i] < 'a' || this.value > 'z')) {
			this.value = this.value.replace(this.value[i], '');
		}
		if (language == 'en' && this.value[0] > 'Z') {
			this.value = this.value[0].toUpperCase() + this.value.slice(1, this.value.length);
		}
	}
	selectMonthArray();
	if (monthArray.indexOf(this.value) != -1) {
		newDate();
		income.removeAttribute('disabled');
		costs.removeAttribute( 'disabled');
	} else {
		deleteElements();
		textDisplay.innerHTML = 0;
		income.setAttribute('disabled', '');
		costs.setAttribute( 'disabled', '');
	}
}

year.oninput = function() {
	if (year.value.slice(-1) < '0' || year.value.slice(-1) > '9' || year.value.length > 5) {
		year.value = year.value.slice(0, -1);
	}
	if (year.value.length > 0) {
		newDate();
	}
}


function removeWords(element, elementTwo, button) {
	if (element.value.length != 0 && elementTwo.value.length != 0) {
		button.removeAttribute('disabled');
	} else {
		button.setAttribute('disabled', '');
	}
	for (var i = 0; i < element.value.length; i++) {
		if (!(	   element.value[i] >= 'A' && element.value[i] <= 'Z'
				|| element.value[i] >= 'a' && element.value[i] <= 'z'
				|| element.value[i] >= 'А' && element.value[i] <= 'я'
				|| element.value[i] >= '0' && element.value[i] <= '9')) {
			element.value = element.value.replace(element.value[i], '');
		}
	}
}

login.oninput = function() {
	removeWords(this, password, ready);
}
password.oninput = function() {
	removeWords(this, login, ready);
}

loginReg.oninput = function() {
	removeWords(this, passwordReg, reg);
}
passwordReg.oninput = function() {
	removeWords(this, loginReg, reg);
}