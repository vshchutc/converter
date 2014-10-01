$(document).ready(function() {
	$( "#go" ).click(function(e) {
		e.preventDefault();
		var numbPre=$("#number").val();
		var totalNumb=parseInt(numbPre);
		if(isNaN(totalNumb)||totalNumb<=0||totalNumb>20000){
			alert("Enter valid integer: Number has to be positive, less than 10 000, also you can't convert a text");
			$("#number").css("color", "#BD5C5C");
			$("#number").change(function(){
			$("#number").css("color", "#000")})
			;}
		else {
			var roman="";
			var numbWithoutThousands=0;
			var fivehundr=0;
			var numbWithoutHundreds=0;
		if(totalNumb>=1000){
			var thousands=(totalNumb-totalNumb%1000)/1000;
			for(i=0;i<thousands;i++){
				roman+="M"
				};
			numbWithoutThousands+=totalNumb%1000;
		} else {
		numbWithoutThousands=totalNumb
		};
		var hundreds=(numbWithoutThousands-numbWithoutThousands%100)/100;
		switch(hundreds){
			case 1:
				roman+="C";
				break;
			case 2:
				roman+="CC";
				break;
			case 3:
				roman+="CCC";
				break;
			case 4:
				roman+="CD";
				break;
			case 5:
				roman+="D";
				break;
			case 6:
				roman+="DC";
				break;
			case 7:
				roman+="DCC";
				break;
			case 8:
				roman+="DCCC";
				break;
			case 9:
				roman+="CM"
				break;
		};
		numbWithoutHundreds+=numbWithoutThousands%100;
		var tens=(numbWithoutHundreds-numbWithoutHundreds%10)/10;
		switch(tens){
			case 1:
				roman+="X";
				break;
			case 2:
				roman+="XX";
				break;
			case 3:
				roman+="XXX";
				break;
			case 4:
				roman+="XL";
				break;
			case 5:
				roman+="L";
				break;
			case 6:
				roman+="LX";
				break;
			case 7:
				roman+="LXX";
				break;
			case 8:
				roman+="LXXX";
				break;
			case 9:
				roman+="XC"
				break;
		};
		var units=numbWithoutHundreds%10;
		switch(units){
			case 1:
				roman+="I";
				break;
			case 2:
				roman+="II";
				break;
			case 3:
				roman+="III";
				break;
			case 4:
				roman+="IV";
				break;
			case 5:
				roman+="V";
				break;
			case 6:
				roman+="VI";
				break;
			case 7:
				roman+="VII";
				break;
			case 8:
				roman+="VIII";
				break;
			case 9:
				roman+="IX"
				break;
		};
	};
	$("#result").empty();
	$('#result').append(roman);});
});