var 
	wrapper = document.getElementsByClassName('wrapper')[0];
	settingsPanel 	= document.getElementsByClassName('settingsPanel')[0];

function seaTheme() {
	if (sea.className.indexOf('buttonOff') == -1) {
		return;
	}
	wrapper.className		= wrapper.className.replace(		' themeDollarsWrapper', 	  '');
	background.className 	= background.className.replace(		' themeDollarsBackground', 	  '');
	settingsPanel.className = settingsPanel.className.replace(	' themeDollarsSettingsPanel', '');
	loginForm.className 	= loginForm.className.replace(		' themeDollarsLoginForm', 	  '');
	registration.className 	= registration.className.replace(	' themeDollarsLoginForm', 	  '');
	keyboard.className 		= keyboard.className.replace(		' themeDollarsKeyboard', 	  '');
	keyboardMonthEn.className = keyboardMonthEn.className.replace(		' themeDollarsKeyboard', 	  '');
	keyboardMonthRu.className = keyboardMonthRu.className.replace(		' themeDollarsKeyboard', 	  '');
	keyboardLoginEn.className = keyboardLoginEn.className.replace(		' themeDollarsKeyboard', 	  '');
	keyboardLoginRu.className = keyboardLoginRu.className.replace(		' themeDollarsKeyboard', 	  '');
	settingsPanel.className += ' themeSeaSettingsPanel';
	wrapper.className		+= ' themeSeaWrapper';
	background.className 	+= ' themeSeaBackground';
	loginForm.className 	+= ' themeSeaLoginForm';
	registration.className 	+= ' themeSeaLoginForm';
	keyboard.className 		+= ' themeSeaKeyboard';
	keyboardMonthEn.className += ' themeSeaKeyboard';
	keyboardMonthRu.className += ' themeSeaKeyboard';
	keyboardLoginEn.className += ' themeSeaKeyboard';
	keyboardLoginRu.className += ' themeSeaKeyboard';
	sunset.className  = 'buttonOff';
	dollars.className = 'buttonOff';
	sea.removeAttribute('class');
	themeSave = 'sea';
	saveSettings();
}

function sunsetTheme() {
	if (sunset.className.indexOf('buttonOff') == -1) {
		return;
	}
	wrapper.className		= wrapper.className.replace(		' themeSeaWrapper', 		'').replace(' themeDollarsWrapper', 	  '');
	background.className 	= background.className.replace(		' themeSeaBackground', 		'').replace(' themeDollarsBackground', 	  '');
	settingsPanel.className = settingsPanel.className.replace(	' themeSeaSettingsPanel', 	'').replace(' themeDollarsSettingsPanel', '');
	loginForm.className 	= loginForm.className.replace(		' themeSeaLoginForm', 		'').replace(' themeDollarsLoginForm', 	  '');
	registration.className 	= registration.className.replace(	' themeSeaLoginForm', 		'').replace(' themeDollarsLoginForm', 	  '');
	keyboard.className 		= keyboard.className.replace(		' themeSeaKeyboard',		'').replace(' themeDollarsKeyboard', 	  '');
	keyboardMonthEn.className = keyboardMonthEn.className.replace(		' themeSeaKeyboard', 	  '').replace(	' themeDollarsKeyboard', '');
	keyboardMonthRu.className = keyboardMonthRu.className.replace(		' themeSeaKeyboard', 	  '').replace(	' themeDollarsKeyboard', '');
	keyboardLoginEn.className = keyboardLoginEn.className.replace(		' themeSeaKeyboard',		'').replace(' themeDollarsKeyboard', '');
	keyboardLoginRu.className = keyboardLoginRu.className.replace(		' themeSeaKeyboard',		'').replace(' themeDollarsKeyboard', '');
	sea.className 	  = 'buttonOff';
	dollars.className = 'buttonOff';
	sunset.removeAttribute('class');
	themeSave = 'sunset';
	saveSettings();
}

function dollarsTheme() {
	if (dollars.className.indexOf('buttonOff') == -1) {
		return;
	}
	wrapper.className		= wrapper.className.replace(		' themeSeaWrapper', 		'');
	background.className 	= background.className.replace(		' themeSeaBackground', 		'');
	settingsPanel.className = settingsPanel.className.replace(	' themeSeaSettingsPanel', 	'');
	loginForm.className 	= loginForm.className.replace(		' themeSeaLoginForm', 		'');
	registration.className 	= registration.className.replace(	' themeSeaLoginForm', 		'');
	keyboard.className 		= keyboard.className.replace(		' themeSeaKeyboard', 		'');
	keyboardMonthEn.className = keyboardMonthEn.className.replace(		' themeSeaKeyboard', 	  '');
	keyboardMonthRu.className = keyboardMonthRu.className.replace(		' themeSeaKeyboard', 	  '');
	keyboardLoginEn.className = keyboardLoginEn.className.replace(		' themeSeaKeyboard', 	  '');
	keyboardLoginRu.className = keyboardLoginRu.className.replace(		' themeSeaKeyboard', 	  '');
	settingsPanel.className += ' themeDollarsSettingsPanel';
	wrapper.className		+= ' themeDollarsWrapper';
	background.className 	+= ' themeDollarsBackground';
	loginForm.className 	+= ' themeDollarsLoginForm';
	registration.className 	+= ' themeDollarsLoginForm';
	keyboard.className 		+= ' themeDollarsKeyboard';
	keyboardMonthEn.className += ' themeDollarsKeyboard';
	keyboardMonthRu.className += ' themeDollarsKeyboard';
	keyboardLoginEn.className 		+= ' themeDollarsKeyboard';
	keyboardLoginRu.className 		+= ' themeDollarsKeyboard';
	sunset.className  = 'buttonOff';
	sea.className = 'buttonOff';
	dollars.removeAttribute('class');
	themeSave = 'dollars';
	saveSettings();
}

function themeSelected() {
	switch (themeSave) {
		case 'sunset' :
			sunsetTheme();
			break;
		case 'sea'	  :
			seaTheme();
			break;
		case 'dollars':
			dollarsTheme();
			break;
	}
}

if (localStorage.getItem('user') != null && localStorage.getItem('user') != '') {
	themeSelected();
}

sea.onclick 	= seaTheme;
sunset.onclick 	= sunsetTheme;
dollars.onclick = dollarsTheme;