var primerNumero = prompt("Introduce el primer número: ");
var segundoNumero = prompt("Introduce el segundo número: ");
var operador = prompt("Introduce 'sumar', 'restar', 'multiplicar', o 'dividir' para visualizar tu resultado: ");

switch (operador.toLowerCase()) {
    case "sumar":
        sumar(primerNumero, segundoNumero);
        break;
    case "restar":
        restar(primerNumero, segundoNumero);
        break;
    case "multiplicar":
        multiplicar(primerNumero, segundoNumero);
        break;
    case "dividir":
        dividir(primerNumero, segundoNumero);
        break;
    default:
        alert("Operador inválido");
}


function sumar (primerNumero, segundoNumero) {
    var correctos = comprobarNumeros(primerNumero, segundoNumero);
    if (correctos === true) {
        return primerNumero + '+' + segundoNumero + '=' + (parseInt(primerNumero)+parseInt(segundoNumero));
    }
}

function restar (primerNumero, segundoNumero) {
    var correctos = comprobarNumeros(primerNumero, segundoNumero);
    if (correctos === true) {
        return primerNumero + '-' + segundoNumero + '=' + (parseInt(primerNumero)-parseInt(segundoNumero));
    }
}

function multiplicar (primerNumero, segundoNumero) {
    var correctos = comprobarNumeros(primerNumero, segundoNumero);
    if (correctos === true) {
        return primerNumero + 'x' + segundoNumero + '=' + (parseInt(primerNumero)*parseInt(segundoNumero));
    }
}

function dividir (primerNumero, segundoNumero) {
    var correctos = comprobarNumeros(primerNumero, segundoNumero);
    if (correctos === true) {
        if (segundoNumero === '0') {
            alert("Error, no se puede dividir un número entre 0");
        } else {
            return primerNumero + '/' + segundoNumero + '=' + (parseInt(primerNumero)/parseInt(segundoNumero));
        }
    }
}

function comprobarNumeros(primerNumero, segundoNumero) {
    if (isNaN(primerNumero) === true || isNaN(segundoNumero) === true) {
        alert("Los dígitos a sumar deben ser numéricos");
        return false;
    } else {
        return true;
    }
}