var name = "Сергей"
var age = 18;
true;
false;


function accessAllowed() {
	var message = 'Доступ на сайт разрешен';
	console.log(message);
 alert(message);
}



var year = prompt('Введите свой возраст', '');

if (year >= 18 && confirm('Подписаны ли вы на разссылку')) {
					accessAllowed();
		
} else {
  alert('Доступ запрещен'); 
}
