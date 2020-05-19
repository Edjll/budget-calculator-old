function mobileKeyboard() {
	var activeInput,
		keyboardLogin;

	if (language == 'ru') {
		keyboardLogin = document.getElementById('keyboardLoginRu');
	} else {
		keyboardLogin = document.getElementById('keyboardLoginEn');
	}

	function focus(keyboardId, id) {
		if (keyboardId.className.indexOf('keyboardOn') == -1) {
			keyboardId.className += ' keyboardOn';
		}
		activeInput = document.getElementById(id);
	}

	function blur(keyboardId) {
		if (keyboardId.className.indexOf('keyboardOn') != -1 && chekKeyboard(keyboardId)) {
			keyboardId.className = keyboardId.className.replace(' keyboardOn', '');
		}
	}

	income.onfocus = function() {
		focus(keyboard, this.id);
	}
	costs.onfocus  = function() {
		focus(keyboard, this.id);
	}

	income.onblur = function() {
		blur(keyboard);
	}
	costs.onblur  = function() {
		blur(keyboard);
	}


	function chekKeyboard(keyboardId) {
		var flag = true;
		keyboardId.onclick = function() {
			console.log(keyboardId);
			flag = false;
			var point = true,
				eTarget = event.target;
			if (this.id == 'keyboard') {
				switch (eTarget.innerHTML) {
					case 'Clear' : case 'Очистить' :
						activeInput.value = '';
						point = false;
						break;
					case '.' : 
						if (activeInput.id == 'year') {
							point = false;
							break;
						}
						if (activeInput.value.length == 0) {
							activeInput.value = '0.';
							point = false;
							break;
						}
						if (activeInput.value.indexOf('.') != -1) {
							point = false;
							break;
						}
						break;
					case 'X' :
						activeInput.value = activeInput.value.slice(0, -1);
						point = false;
						break;
					case 'Ok' :
						addItem(activeInput.id, eTarget);
						point = false;
						break;
				}
			}
			selectMonthArray();
			if (this.id == 'keyboardMonthEn' || this.id == 'keyboardMonthRu' || this.id == 'keyboardLoginRu' || this.id == 'keyboardLoginEn') {
				if (language == 'ru' && activeInput.value[0] > 'Я' && this.id != 'keyboardLoginRu') {
					activeInput.value = activeInput.value[0].toUpperCase() + activeInput.value.slice(1, activeInput.value.length);
				}
				if (language == 'en' && activeInput.value[0] > 'Z' && this.id != 'keyboardLoginEn') {
					activeInput.value = activeInput.value[0].toUpperCase() + activeInput.value.slice(1, activeInput.value.length);
				}
				if (eTarget.innerHTML == 'Clear' || eTarget.innerHTML == 'Очистить') {
					activeInput.value = '';
					point = false;
				}
				if (eTarget.innerHTML == '✘') {
					activeInput.value = activeInput.value.slice(0, -1);
					point = false;
				}
				if (eTarget.innerHTML == 'En') {
					keyboardLoginRu.className = keyboardLoginRu.className.replace(' keyboardOn', '');
					keyboardLoginEn.className += ' keyboardOn';
					keyboardLogin = document.getElementById('keyboardLoginEn');
					point = false;
				}
				if (eTarget.innerHTML == 'Ru') {
					keyboardLoginEn.className = keyboardLoginEn.className.replace(' keyboardOn', '');
					keyboardLoginRu.className += ' keyboardOn';
					keyboardLogin = document.getElementById('keyboardLoginRu');
					point = false;
				}
				if (eTarget.innerHTML == '⇧') {
					point = false;
					for (var i = 0; i < eTarget.parentNode.children.length; i++) {
						if (eTarget.parentNode.children[i].innerHTML >= 'a' && eTarget.parentNode.children[i].innerHTML <= 'z' || eTarget.parentNode.children[i].innerHTML >= 'а' && eTarget.parentNode.children[i].innerHTML <= 'я') {
							if (eTarget.parentNode.children[i].innerHTML != '⇧' && eTarget.parentNode.children[i].innerHTML != 'Clear' && eTarget.parentNode.children[i].innerHTML != '✘' && eTarget.parentNode.children[i].innerHTML != 'Очистить' && eTarget.parentNode.children[i].innerHTML != 'En' && eTarget.parentNode.children[i].innerHTML != 'Ru') {
								eTarget.parentNode.children[i].innerHTML = eTarget.parentNode.children[i].innerHTML.toUpperCase();
							}
						} else {
							if (eTarget.parentNode.children[i].innerHTML != '⇧' && eTarget.parentNode.children[i].innerHTML != 'Clear' && eTarget.parentNode.children[i].innerHTML != '✘' && eTarget.parentNode.children[i].innerHTML != 'Очистить' && eTarget.parentNode.children[i].innerHTML != 'En' && eTarget.parentNode.children[i].innerHTML != 'Ru') {
								eTarget.parentNode.children[i].innerHTML = eTarget.parentNode.children[i].innerHTML.toLowerCase();
							}
						}
					}
				}
			}
			if (point) {
				activeInput.value += eTarget.innerHTML;
			}
			activeInput.focus();
			if (activeInput.value.length > 13) {
				activeInput.value = activeInput.value.slice(0, -1);
			}
			if (month.value.length > 9) {
				month.value = month.value.slice(0, -1);
			}
			if (year.value.length > 5) {
				year.value = year.value.slice(0, -1);
			}
			if (activeInput.id == 'login' || activeInput.id == 'password' || activeInput.id == 'loginReg' || activeInput.id == 'passwordReg') {
				if (activeInput.value.length > 8) {
					activeInput.value = activeInput.value.slice(0, -1);
				}
			}
			if (activeInput.id == 'login' || activeInput.id == 'password') {
				removeWords(activeInput, login, reg);
			} 
			if (activeInput.id == 'loginReg' || activeInput.id == 'passwordReg') {
				removeWords(activeInput, loginReg, reg);
			} 
			if (monthArray.indexOf(month.value) != -1 && year.value.length > 0) {
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
		return flag;
	}



	month.onfocus = function() {
		if (language == 'ru') {
			focus(keyboardMonthRu, this.id);
		} else {
			focus(keyboardMonthEn, this.id);
		}
	}
	month.onblur = function() {
		if (language == 'ru') {
			blur(keyboardMonthRu);
		} else {
			blur(keyboardMonthEn);
		}
	}

	year.onfocus  = function() {
		focus(keyboard, this.id);
	}

	year.onblur = function() {
		blur(keyboard);
	}

	login.onfocus = function() {
		focus(keyboardLogin, this.id);
	}

	login.onblur = function() {
		blur(keyboardLogin);
	}

	password.onfocus = function() {
		focus(keyboardLogin, this.id);
	}

	password.onblur = function() {
		blur(keyboardLogin);
	}

	loginReg.onblur = function() {
		blur(keyboardLogin);
	}

	loginReg.onfocus = function() {
		focus(keyboardLogin, this.id);
	}

	passwordReg.onblur = function() {
		blur(keyboardLogin);
	}

	passwordReg.onfocus = function() {
		focus(keyboardLogin, this.id);
	}
}




if (mobile) {
	mobileKeyboard();
}