/*Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color 
format it returns RGB and if you enter RGB color format it returns HEX.*/
const regex = /^[0-9]*$/;

//Combierte de hexadecimal a decimal
const hexAdec = (letter) => {
    switch (letter.toUpperCase()) {
        case 'A': return 10;
        case 'B': return 11;
        case 'C': return 12;
        case 'D': return 13;
        case 'E': return 14;
        case 'F': return 15;
    }
}

//Combierte de decimal a hexadecimal
const decAhex = (num) => {
    switch (num) {
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
    }
}

//Combierte de HEX a RGB
const hexArgb = (valor) => {
    let arrayRGB = [];
    let num = 0;
    //Recorre el valor saltandose el # y comprueba caracter a caracter si son números o letras
    for (let i = 1; i < valor.length; i++) {
        //Si es un número lo multiplica por 16
        if (regex.test(valor[i])) {
            num += Number(valor[i]) * 16;
        } 
        //Si es una letra primero la combierte a decimal y luego lo multiplica por 16
        else {
            num += hexAdec(valor[i]) * 16;
        }
        //Suma 1 para coger el siguiente caracter
        i++;
        //Si es un número simplemente lo suma a la solución anterior
        if (regex.test(valor[i])) {
            num += Number(valor[i]);
        } 
        //Si es una letra la combierte a decimal y lo suma a la solución anterior
        else {
            num += hexAdec(valor[i]);
        }
        //Mete el resultado en un array y reinicia el número
        arrayRGB.push(num);
        num = 0;
    }
    //Devuelve el resultado en RGB
    return `RGB(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
}

//Combierte de RGB a HEX
const rgbAhex = (valor) => {
    let stringHEX = "";
    let num = "";
    let hexValor1 = ""; let hexValor2 = "";
    let resto = 0;
    let haEntrado = false;
    //Recorre el valor saltandose el 'RGB()'
    for (let i = 4; i < valor.length-1; i++) {
        //Del valor coge solo los números
        while (regex.test(valor[i])) {
            num += valor[i];
            i++
            haEntrado = true;
        }
        //Si ha recogido un número nuevo entra
        if (haEntrado === true) {
            //Divide el número entre 16 y guarda los decimales en otra variable
            hexValor1 = Math.trunc(num/16);
            resto = (num/16) - hexValor1;
            //Si el resultado es mayor de 10 lo combierte a hexadecimal 
            if (hexValor1 >= 10) {
                hexValor1 = decAhex(hexValor1);
            }
            //Multiplica los decimales por 16
            hexValor2 = resto*16;
            //Si el resultado es mayor de 10 lo combierte a hexadecimal y lo guarda en el string del resultado
            if (hexValor2 >= 10) {
                hexValor2 = decAhex(hexValor2);
                stringHEX += `${hexValor1}${hexValor2}`;
            } 
            //Si es menor que 10 lo guarda en el resultado directamente
            else {
                stringHEX += `${hexValor1}${hexValor2}`;
            }
            //Reinicio el número para la siguiente ronda
            num = "";
        }
        //Reinicio el boolean para la siguiente ronda
        haEntrado = false;
    }
    //Devuelvo el número en HEX
    return `#${stringHEX}`;
}

//Recoge un valor y dependiendo de si es HEX o RGB llama a una función y otra
const conversion = (valor) => {
    //Entra si le llega un HEX y lo combierte a RGB
    if (valor.startsWith("#")) {
        return hexArgb(valor);
    }
    //Entra si le llega un RGB y lo combierte a HEX
    else if (valor.startsWith("RGB")) {
        return rgbAhex(valor);
    }
    //Entra si meten un número que no es ni HEX ni RGB
    else {
        return "Valor introducido inválido";
    }
}