
//better formating
//write the hex converters

$(function() {
	$("#update").click(function() {
		updateDiv("big", $("input#background").val());
		updateDiv("small", $("input#foreground").val());
	});

	$("input").keypress(function(event) {
	    if (event.which == 13) {
			updateDiv("big", $("input#background").val());
			updateDiv("small", $("input#foreground").val());
	    }
	});
});

function updateDiv(divName, str) {
		var alpha, red, green, blue;
		var number = str;

		if ($.isNumeric(number)) {
			if (number < 0) {
				number = Math.pow(2, 32) + Number(number);
			}

		} else if (number.length > 2 && 
			(number[0] == 0 && 
				(number[1] == "x" || number[1] == "X"))) {
			number = parseInt(number, 16);
		} else {
			alert(str + " is not a hex or decimal number");
			return;
		}

		console.log("div: " + divName);
		console.log("str: " + str);
		console.log("number: " + number);

		blue = number % 256;
		number = Math.floor(number / 256);

		green = number % 256;
		number = Math.floor(number / 256);

		red = number % 256;
		number = Math.floor(number / 256);

		alpha = number % 256;

		console.log(alpha/255, red, green, blue);

		var div = document.getElementById(divName);         
        div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"; 
        div.style.opacity = alpha/255;
}
