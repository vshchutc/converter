$(document).ready(function() {
	
	$( "#go" ).click(function(e) {
		e.preventDefault();
		var numbPre=$("#number").val();
		var totalNumb=parseInt(numbPre);
		if (isNaN(totalNumb)||totalNumb<=0||totalNumb>1000) {
			alert("Enter valid integer: Number has to be positive, less than 10 000, also you can't convert a text");
			$("#number").css("color", "#BD5C5C");
			} else {
			var roman="";
			
			var unitsArr=["I","V","X"];
			var tensArr=["X","L","C"];
			var hundredsArr=["C","D","M"];
			function count(arrayName,quantity,romResult ) {
				switch(quantity){
					case 0:
						romResult="";
						break;
					case 1:
						romResult=arrayName[0];
						break;
					case 2:
						romResult=arrayName[0]+arrayName[0];
						break;
					case 3:
						romResult=arrayName[0]+arrayName[0]+arrayName[0];
						break;
					case 4:
						romResult=arrayName[0]+arrayName[1];
						break;
					case 5:
						romResult=arrayName[1];
						break;
					case 6:
						romResult=arrayName[1]+arrayName[0];
						break;
					case 7:
						romResult=arrayName[1]+arrayName[0]+arrayName[0];
					case 8:
						romResult=arrayName[1]+arrayName[0]+arrayName[0]+arrayName[0];
						break;
					case 9:
						romResult=arrayName[0]+arrayName[2];
						break;
				};
				return romResult;
			};
			
			var withoutHundreds=totalNumb%100;
			var withoutTens=withoutHundreds%10;
			var hundredsQuantity=(totalNumb-withoutHundreds)/100;
			var tensQuantity=(withoutHundreds-withoutTens)/10;
			var unitsQuantity=withoutTens;
			roman+=count(hundredsArr,hundredsQuantity)+count(tensArr,tensQuantity)+count(unitsArr,unitsQuantity);
			}
		$("#result").empty();
		$('#result').append(roman);
	});
	

	
});
		