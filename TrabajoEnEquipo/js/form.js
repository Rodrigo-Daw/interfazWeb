document.addEventListener("DOMContentLoaded", function(){
	const btnSubmit = document.querySelector("#btnSubmit");
    const email = document.querySelector("#email");
    const nombre = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const consentimiento = document.querySelector("#consentimiento");

	btnSubmit.addEventListener("click", enviarAlerta(email, nombre, apellidos, consentimiento));
})

function enviarAlerta(email, nombre, apellidos, consentimiento){
    if(email != "" && nombre != "" && apellidos != "" && consentimiento!= "")
        alert("Formulario enviado. Gracias por suscribirse");
}

