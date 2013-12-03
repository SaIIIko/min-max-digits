function num(n){
	var max=0, min=9;
	if(typeof(n)="Number"){
		while(n>0){
		if(n%10<min) min=n%10;
		if(n%10>max) max=n%10;
		n=Math.floor(n/10);
		}
		return 'Наименьшая цифра:'+min+\n +'Наибольшая цифра:'+max;
	}else{
		console.log('Тольк числа')
	}
	
}
console.log(num(2233435791));