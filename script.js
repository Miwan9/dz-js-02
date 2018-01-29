let taba;
let sharm;
let hurgada;

let result = prompt('Введите число от 1 до 3х')

function abroad(){
	if (result == 1){
		alert('Вы выбрали Taba!')
	}
	else if (result == 2){
		alert('Вы выбрали Sharm!')
	}
	else if (result == 3){
		alert('Вы выбрали Hurgada!')
	}	
	else {
		alert('Введено число, варианта курорта для которого нету')
	}
}

abroad();