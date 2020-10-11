document.getElementById("butt").onclick= function(){
	var ip1= parseInt(document.getElementById('in1').value);
	var op= document.getElementById('in2').value;
	var ip3= parseInt(document.getElementById('in3').value);
	var result 
	if(op==="+")
		result = ip1 + ip3;
	else if(op==="-")
		result = ip1 - ip3;
	else if(op==="/")
		result = ip1 / ip3;
	else if(op==="*")
		result = ip1 * ip3;
	else{ 
		document.getElementById('result').style.color = "red";
		document.getElementById('result').innerHTML= "wrong inputs";
	}
	if(result < 100){
		document.getElementById('result').style.color = "green";
		document.getElementById('result').innerHTML= result;
	}
	if(result >= 100 ){
		document.getElementById('result').style.color = "blue";
	    document.getElementById('result').innerHTML= result;
		}
	if(! parseInt(ip1) || !parseInt(ip3) ){
		document.getElementById('result').style.color = "red";
		document.getElementById('result').innerHTML= "wrong inputs";
	}


}