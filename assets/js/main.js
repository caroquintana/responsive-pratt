
document.getElementById("boton").addEventListener("click", validateForm);

function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("mail").value;
	var text = document.getElementById("box").value;
	var regexEmail=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var regexName = /^[A-Za-z]*/;
	
	if (name === ""){
		alert("Nombre vacío")
	}
	
};
