document.getElementById("formFidelidad").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("mensajeExito").style.display = "none";
    const erroresPrevios = document.querySelectorAll(".mensaje-error");
    erroresPrevios.forEach(e => e.remove());

    let valido = true;
    let primerCampo = null;

    const campos = [
        "nombres", "apellidos", "tipoId", "numId",
        "fechaNacimiento", "direccion", "ciudad",
        "pais", "marca", "departamento"
    ];

    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (!campo || !campo.value.trim()) {
            valido = false;
            if (!primerCampo) primerCampo = campo;
            mostrarError(campo, 'Este campo es obligatorio');
        }
    });


    const nombres = document.getElementById("nombres");
    if (nombres && nombres.value && !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombres.value.trim())) {
        valido = false;
        mostrarError(nombres, "Solo se permiten letras y espacios");
        if (!primerCampo) primerCampo = nombres;
    }
    const apellidos = document.getElementById("apellidos");
    if (apellidos && apellidos.value && !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellidos.value.trim())) {
        valido = false;
        mostrarError(apellidos, "Solo se permiten letras y espacios");
        if (!primerCampo) primerCampo = apellidos;
    }

    const numId = document.getElementById("numId");
    if (numId && numId.value && !/^\d+$/.test(numId.value.trim())) {
        valido = false;
        mostrarError(numId, "Solo se permiten números");
        if (!primerCampo) primerCampo = numId;
    }

    // Validación de dirección (mínimo 5 caracteres)
    const direccion = document.getElementById("direccion");
    if (direccion && direccion.value && direccion.value.trim().length < 5) {
        valido = false;
        mostrarError(direccion, "La dirección debe tener al menos 5 caracteres");
        if (!primerCampo) primerCampo = direccion;
    }


    document.getElementById("mensajeExito").textContent =
        "¡Bienvenido al programa de fidelidad! Pronto recibirás beneficios exclusivos.";
    document.getElementById("mensajeExito").style.display = "block";
    setTimeout(() => {
        document.getElementById("mensajeExito").style.display = "none";
        document.getElementById("formFidelidad").reset();
        document.getElementById("mensajeExito").textContent =
            "¡Registro exitoso! Gracias por inscribirse en nuestro programa de fidelidad.";
    }, 3500);
});

function mostrarError(campo, mensaje) {
    if (!campo) return;
    const error = document.createElement("div");
    error.className = "mensaje-error";
    error.style.color = "#d32f2f";
    error.style.fontSize = "13px";
    error.style.marginTop = "3px";
    error.textContent = mensaje;
    campo.parentNode.appendChild(error);
}