var edad = prompt("Introduce tu edad: ");

function comprobarEdad(edad) {
    if (Number(edad) < 18) {
        alert("Lo siento, eres demasiado joven para conducir este coche. Apagando coche");
    } else if (Number(edad) === 18) {
        alert("Enhorabuena, es tu primer año de conducción. Disfruta el coche!");
    } else if (Number(edad) > 18) {
        alert("Encenciendo el coche. Disfruta el coche!");
    } else {
        alert("Lo siento. No has introducido una edad válida.");
    }
}

comprobarEdad(edad);