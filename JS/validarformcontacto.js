function validar() {
    var expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var valor = document.getElementById("email");
    if (!expresion.exec(valor.value)) {
        alert("El campo correo electrónico es incorrecto");
        document.getElementById("email").value = "";
    }
}

function validarTelefono() {
    var txtTelefonoInput = document.getElementById('txtTelefono');
    var txtTelefonoError = document.getElementById('txtTelefono-error');
    var txtTelefonoRegex = /^[09][0-9]{1,9}$/;

    if (txtTelefonoInput.value.trim() === '') {
        txtTelefonoError.innerText = 'Por favor, ingrese su Telefono.';
        txtTelefonoError.style.display = 'block';
        return false;
    } else if (!txtTelefonoRegex.test(txtTelefonoInput.value)) {
        txtTelefonoError.innerText = 'Por favor, ingresa un Telefono valido.';
        txtTelefonoError.style.display = 'block';
        return false;
    } else {
        txtTelefonoError.innerText = '';
        txtTelefonoError.style.display = 'none';
        return true;
    }
}

function validarboton() {
    /*const myButton = document.getElementById("boton");
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = "Enviando datos ..........";

    setTimeout(function () {
        //console.log('Espera por favor...');
        myButton.textContent = "Datos enviados";
        myButton.style.opacity = 1;
        myButton.disabled = false;
    }, 1000);*/
    var boton = document.querySelector('input[type="button"]');
  boton.disabled = true; // Deshabilitar el botón
  boton.value = 'Enviando datos...'; // Cambiar el mensaje del botón

  this.form.submit(); // Enviar el formulario

}

