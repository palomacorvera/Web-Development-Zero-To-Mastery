/*Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]*/
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Organiza el array original
const ordenar = (a, b) => {return a - b;}
array.sort(ordenar);

//Organiza el array ya ordenado metiendo los números duplicados en arrays más pequeños
const organizarPorDuplicados = (arr) => {
    //Recorre el array original
    for (let i = 0; i < arr.length; i++) {
        let miniArray = [];
        //Comprueba si entra en el while
        let haEntrado = false;
        //Si el número en el que está es igual al siguiente entra para ir rellenando el mini array
        while (arr[i] === arr[i+1] && i < arr.length-1) {
            miniArray.push(arr[i]);
            i++;
            haEntrado = true;
        }
        //Creo el nuevo array donde estarán los números y los arrays más pequeños
        const nuevoArray = [];
        //Si ha entrado, hay que añadir un número más al mini array porque el último no lo mete en el while
        if (haEntrado === true) {
            miniArray.push(arr[i]);
            nuevoArray.push(miniArray);
        } 
        //Si no ha entrado en el while, se da por hecho que es un número suelto y que no va en array
        else {
            nuevoArray.push(arr[i]);
        }
    }
    //Devuelve el nuevo array
    return nuevoArray;
}

const nuevoArray = organizarPorDuplicados(array);

//=============================================//

/*Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/
const array2 = [1, "2", "3", 2];

//Organiza el array original
array2.sort(ordenar);

//Organiza el array ya ordenado metiendo los números en un mini array y las cadenas en otro
const organizarPorTipos = (arr) => {
    let arrayNumeros = [];
    let arrayStrings = [];
    //Recorre el array original
    for (let i = 0; i < arr.length; i++) {
        //Comprueba si el valor es un número o una cadena y lo mete en el array correspondiente
        if (typeof arr[i] === 'string') {
            arrayStrings.push(arr[i]);
        } else if (typeof arr[i] === 'number') {
            arrayNumeros.push(arr[i]);
        }
    }
    //Mete los dos mini arrays en un nuevo array
    const nuevoArray = [];
    nuevoArray.push(arrayNumeros);
    nuevoArray.push(arrayStrings);
    //Devuelve el nuevo array
    return nuevoArray;
}

const nuevoArray2 = organizarPorTipos(array2);
console.log(nuevoArray2);