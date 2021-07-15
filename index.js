function BMI() {
	
	const h = document.getElementById('h').value;
	const w = document.getElementById('w').value;
	const bmi = w/(h/100*h/100);
	const bmio = (bmi.toFixed(2));

	document.getElementById("result").innerHTML="Your BMI is " + bmio;
	
	// const titleResult = document.getElementById('title');
	if (bmio < 16) {
		document.getElementById("title").innerHTML = "Выраженный дефицит";
		
	} else if(bmio > 16 && bmio < 18.5) {
		document.getElementById("title").innerHTML = "Недостаточная масса";
		
	} else if(bmio > 18 && bmio < 24.99) {
		document.getElementById("title").innerHTML = "Норма";
		
	} else if(bmio > 25 && bmio < 30) {
		document.getElementById("title").innerHTML = "Избыточная масса тела";
		
	} else if(bmio > 30 && bmio < 35) {
		document.getElementById("title").innerHTML = "Ожирение";
		
	} else if(bmio > 35 && bmio < 40) {
		document.getElementById("title").innerHTML = "Выраженное ожирение";
		
	} else if(bmio > 40 ) {
		document.getElementById("title").innerHTML = "Ожирение тяжелой степени";
		
	} 

	

	

}



