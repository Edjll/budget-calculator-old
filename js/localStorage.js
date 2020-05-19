var 
	elementValue  = '',
	htmlTagLi,
	counter,
	sortLocalStorageArray = [],
	dateNow = new Date(),
	monthArrayUser 		= [	'Январь', 
							'Февраль', 
							'Март', 
							'Апрель', 
							'Май', 
							'Июнь', 
							'Июль', 
							'Август', 
							'Сентябрь', 
							'Октябрь', 
							'Ноябрь', 
							'Декабрь' ],

	monthArrayServer 	= [	'January', 
							'February', 
							'March', 
							'April', 
							'May', 
							'June', 
							'July', 
							'August', 
							'September', 
							'October', 
							'November', 
							'December' ];


var 
	counterIncome = 0,
	counterCosts  = 0,
	counterUsers  = 0,
	balance 	  = 0,
	balanceAll	  = 0;