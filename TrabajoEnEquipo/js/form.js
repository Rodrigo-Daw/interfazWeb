document.addEventListener("DOMContentLoaded", function(){
	const btnSubmit = document.querySelector("#btnSubmit");
	btnSubmit.addEventListener("click", enviarAlerta);
})

/* function enviarAlerta(){
    const email = document.querySelector("#email").value;
    const nombre = document.querySelector("#nombre").value;
    const apellidos = document.querySelector("#apellidos").value;
    const consentimiento = document.querySelector("#consentimiento").value;
    if(email != null && nombre != null && apellidos != null && consentimiento!= null)
        alert("Formulario enviado. Gracias por suscribirse");
} */

function enviarAlerta(){
    alert("Formulario enviado. Gracias por suscribirse");   
}
    

