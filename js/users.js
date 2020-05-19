

counterUsers = Number(localStorage.getItem('counterUsers'));


userSave = localStorage.getItem('user');

ready.onclick = function() {
	var loginAvailability = false;
	for (var i = 0; i < localStorage.length; i++){
      	if (localStorage.getItem(localStorage.key(i)) == login.value && localStorage.getItem(login.value + '_password') != password.value) {
      		if (language == 'ru') {
      			login.value = 'Пароль не верен';
      			password.value = '';
      			removeWords(password, login, ready);
      		} else {
      			login.value = 'Password is not correct';
      			password.value = '';
      			removeWords(password, login, ready);
      		}
      		return;
      	}
      	if (localStorage.getItem(localStorage.key(i)) == login.value) {
      		loginAvailability = true;
      	}
    }
    if (loginAvailability) {
		userSave = login.value;
		localStorage.setItem('user', userSave);
		balanceAll = Number(localStorage.getItem(userSave + '_balance'));
		setSettings();
		deleteElements();
		loadLocalStorage();
		signForm(loginForm);
		setSettingsPanel();
	} else {
		if (language == 'ru') {
  			login.value = 'Логин не верен';
  			password.value = '';
  			removeWords(password, login, ready);
  		} else {
  			login.value = 'Login is not correct';
  			password.value = '';
  			removeWords(password, login, ready);
  		}
	}
}

reg.onclick = function() {
	for (var i = 0; i < localStorage.length; i++){
      	if (localStorage.getItem(localStorage.key(i)) == loginReg.value) {
      		if (language == 'ru') {
      			loginReg.value = 'Логин занят';
      			passwordReg.value = '';
      			removeWords(passwordReg, loginReg, reg);
      		} else {
      			loginReg.value = 'Login busy';
      			passwordReg.value = '';
				removeWords(passwordReg, loginReg, reg);
      		}
      		return;
      	}
	}
	userSave = loginReg.value;
	localStorage.setItem('login_' + String(counterUsers), userSave);
	localStorage.setItem(userSave + '_password', passwordReg.value);
	counterUsers++;
	localStorage.setItem('counterUsers', counterUsers);
	localStorage.setItem('user', userSave);
	balanceAll = Number(localStorage.getItem(userSave + '_balance'));
	setSettings();
	deleteElements();
	loadLocalStorage();
	signForm(registration);
	setSettingsPanel();
}