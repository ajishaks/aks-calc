function add()
{
	a = Number(document.getElementById("numA").value);
  	b = Number(document.getElementById("numB").value);
  	var c = a + b;
	document.getElementById("operator").innerHTML = "+";
	document.getElementById("result").innerHTML = c;
	document.getElementById("msg").innerHTML = '';
}

function subtract()
{
  	a = Number(document.getElementById("numA").value);
  	b = Number(document.getElementById("numB").value);
  	var c = a - b;
	document.getElementById("operator").innerHTML = "-";
	document.getElementById("result").innerHTML = c;
	document.getElementById("msg").innerHTML = '';
}

function multiply()
{
  	a = Number(document.getElementById("numA").value);
  	b = Number(document.getElementById("numB").value);
  	var c = a * b;
	document.getElementById("operator").innerHTML = "*";
	document.getElementById("result").innerHTML = c;
	document.getElementById("msg").innerHTML = '';
  
}

function divide()
{
  
  
}
