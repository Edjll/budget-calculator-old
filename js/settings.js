var 
	language,
	settingsSave,
	monthSave,
	yearSave,
	themeSave,
	userSave,
	mobile = false,
	maxSize = false;

if( 	navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
) {
    document.getElementsByClassName('wrapper')[0].className += ' maxSize';
	incomeElements.className 								+= ' maxSizeElements';
	costsElements.className 								+= ' maxSizeElements';
	maxSize = true;
	mobile = true;
	income.setAttribute('readonly', '');
	costs.setAttribute('readonly', '');
	month.setAttribute('readonly', '');
	year.setAttribute('readonly', '');
	login.setAttribute('readonly', '');
	loginReg.setAttribute('readonly', '');
	password.setAttribute('readonly', '');
	passwordReg.setAttribute('readonly', '');
} else {
	parallax();
}

function setSettings() {

	if (localStorage.getItem('user') == null) {
		localStorage.setItem('user', 'unknown');
	}

	userSave = localStorage.getItem('user');


	if (localStorage.getItem('counterUsers') == null) {
		localStorage.setItem('counterUsers', '1');
	}
	if (localStorage.getItem(userSave + '_' + 'language') == null) {
		localStorage.setItem(userSave + '_' + 'language', 'ru');
	}
	if (localStorage.getItem(userSave + '_' + 'patterns') == null) {
		localStorage.setItem(userSave + '_' + 'patterns', 'columns');
	}
	if (localStorage.getItem(userSave + '_' + 'month') == null) {
		localStorage.setItem(userSave + '_' + 'month', monthArrayServer[dateNow.getMonth()]);
	}
	if (localStorage.getItem(userSave + '_' + 'theme') == null) {
		localStorage.setItem(userSave + '_' + 'theme', 'sunset');
	}
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance') != null) {
		balance = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance'));
	} else {
		balance = 0;
	}
	if (localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance') != null) {
		balance = Number(localStorage.getItem(userSave + '_' + monthSave + '_' + year.value + '_balance'));
	} else {
		balance = 0;
	}
	if (localStorage.getItem(userSave + '_balance') == null) {
		localStorage.setItem(userSave + '_balance', '0');
	}
	if (localStorage.getItem(userSave + '_' + 'year') == null) {
		localStorage.setItem(userSave + '_' + 'year', dateNow.getFullYear());
	}

	if (userSave != 'unknown') {
		signIn.removeAttribute('class');
	} else {
		signIn.setAttribute('class', 'buttonOff');
	}


	balanceAll = Number(localStorage.getItem(userSave + '_balance'));
	monthSave = localStorage.getItem(userSave + '_' + 'month');
	month.value = monthSave;
	language = localStorage.getItem(userSave + '_' + 'language');
	yearSave = localStorage.getItem(userSave + '_' + 'year');
	year.value = yearSave;
	settingsSave = localStorage.getItem(userSave + '_' + 'patterns');
	themeSave = localStorage.getItem(userSave + '_' + 'theme');

	patternSelected();

	if (language == 'ru') {
		languageChooseRu();
	} else {
		languageChooseEn();
	}


}

setSettings();


function setSettingsPanel() {
	var panel = document.getElementsByClassName('settingsPanel')[0];
	if (settings.className == '' || settings.className.indexOf('themeSeaSettings') != -1 || settings.className.indexOf('themeDollarsSettings') != -1) {
		settings.className += ' settingsOn';
		panel.className += ' settingsPanelOn';
	} else {
		settings.className = settings.className.replace(' settingsOn', '').replace(' settingsLoginOn', '');
		panel.className = panel.className.replace(' settingsPanelOn', '');
		loginForm.className = loginForm.className.replace(' loginFormOn', '');
		registration.className = registration.className.replace(' loginFormOn', '');
	}
}

settings.onclick = setSettingsPanel;

function languageSelected() {
	if (language == 'ru') {
		month.value = monthArrayUser[monthArrayServer.indexOf(month.value)];
		columns.innerHTML 				= 'Колонки';
		rows.innerHTML 					= 'Строки';
		textDivisionIncome.innerHTML 	= 'Доходы';
		textDivisionCosts.innerHTML 	= 'Расходы';
		sunset.innerHTML 				= 'Закат';
		sea.innerHTML 					= 'Море';
		dollars.innerHTML				= 'Доллары';
		document.getElementsByClassName('textAllBalance')[0].innerHTML = 'Всего';
		signIn.innerHTML				= 'Вход';
		signUp.innerHTML 				= 'Регистрация';
		ready.innerHTML					= 'Войти';
		login.value 					= '';
		password.value 				    = '';
		reg.innerHTML 					= 'Зарегистрироваться';
		loginReg.value 					= '';
		passwordReg.value 				= '';
		cleaning.innerHTML				= 'Очистить';
		keyboard.children[2].innerHTML	= 'Очистить';
		ready.setAttribute('disabled', '');
		reg.setAttribute('disabled', '');
	} else {
		if (monthArrayServer.indexOf(month.value) == -1) {
			month.value = monthArrayServer[monthArrayUser.indexOf(month.value)];
		}
		columns.innerHTML 				= 'Columns';
		rows.innerHTML 					= 'Rows';
		textDivisionIncome.innerHTML 	= 'Income';
		textDivisionCosts.innerHTML 	= 'Costs';
		sunset.innerHTML 				= 'Sunset';
		sea.innerHTML 					= 'Sea';
		dollars.innerHTML				= 'Dollars';
		document.getElementsByClassName('textAllBalance')[0].innerHTML = 'All time';
		signIn.innerHTML				= 'Login';
		login.value 	 				= '';
		password.value  				= '';
		signUp.innerHTML 				= 'Registration';
		loginReg.value 					= '';
		passwordReg.value 				= '';
		ready.innerHTML					= 'Sign in';
		reg.innerHTML 					= 'Sign Up';
		cleaning.innerHTML				= 'Cleaning';
		keyboard.children[2].innerHTML	= 'Clear';
		ready.setAttribute('disabled', '');
		reg.setAttribute('disabled', '');
	}
}


function saveSettings() {
	localStorage.setItem(userSave + '_' + 'language', language);
	localStorage.setItem(userSave + '_' + 'patterns', settingsSave);
	localStorage.setItem(userSave + '_' + 'month',	 monthSave);
	localStorage.setItem(userSave + '_' + 'year', 	 yearSave);
	localStorage.setItem(userSave + '_' + 'theme', themeSave);
}

function languageChooseEn() {
	
	ruLanguage.className = 'buttonOff';
	enLanguage.removeAttribute('class');
	language = 'en';
	languageSelected();
	saveSettings();

}

function languageChooseRu() {
		
	enLanguage.className = 'buttonOff';
	ruLanguage.removeAttribute('class');
	language = 'ru';
	languageSelected();
	saveSettings();
	
}

enLanguage.onclick = languageChooseEn;
ruLanguage.onclick = languageChooseRu;


function patternSelected() {
	if (settingsSave == 'columns') {
		columnsPattern();
	} else {
		rowsPattern();
	}
}

function columnsPattern() {

	rows.className = 'buttonOff';
	columns.removeAttribute('class');
	settingsSave = 'columns';
	document.getElementsByClassName('division')[0].className 	= 'division';
	document.getElementsByClassName('income')[0].className 		= 'income';
	document.getElementsByClassName('costs')[0].className 		= 'costs';
	saveSettings();

}
 
function rowsPattern() {

	columns.className = 'buttonOff';
	rows.removeAttribute('class');
	settingsSave = 'rows';
	saveSettings();
	if (maxSize) {
		document.getElementsByClassName('division')[0].className 	+= ' divisionTwoStageMax';
		document.getElementsByClassName('income')[0].className 		+= ' incomeTwoStageMax';
		document.getElementsByClassName('costs')[0].className 		+= ' costsTwoStageMax';
		return;
	}
	document.getElementsByClassName('division')[0].className 		+= ' divisionTwoStage';
	document.getElementsByClassName('income')[0].className 			+= ' incomeTwoStage';
	document.getElementsByClassName('costs')[0].className 			+= ' costsTwoStage';

}


columns.onclick = columnsPattern;
rows.onclick 	= rowsPattern;


function signForm(form) {
	console.log(form);
	if (form.className.indexOf('loginFormOn') == -1) {
		var panel = document.getElementsByClassName('settingsPanel')[0];
		form.className += ' loginFormOn';
		settings.className += ' settingsLoginOn';
		panel.className = panel.className.replace(' settingsPanelOn', '');
	} else {
		form.className = form.className.replace(' loginFormOn', '');
		settings.className = settings.className.replace(' settingsOn', '');
	}
}

signIn.onclick = function() {
	signForm(loginForm);
}

signUp.onclick = function() {
	signForm(registration);
}
