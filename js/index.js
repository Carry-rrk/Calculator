function display(value){
	console.log(document.getElementById("text").value.indexOf("="));
	if(document.getElementById("text").value!="ERROR!" && document.getElementById("text").value.indexOf("=")==-1){
	document.getElementById("text").innerText = document.getElementById("text").value + value;
	}
	else{ 
		document.getElementById("text").innerText = value;
	}
}
function caulcate(){
	console.log((document.getElementById("text").value));
	try{
		display("="+eval(document.getElementById("text").value));
	}
	catch(err){
		alert("计算错误");
		document.getElementById("text").innerText ="ERROR!";
	}
	//alert()
}
function clear1(){
	document.getElementById("text").innerText = "";
}
function del1(){
	document.getElementById("text").innerText =document.getElementById("text").value.substring(0,document.getElementById("text").value.length-1);
}