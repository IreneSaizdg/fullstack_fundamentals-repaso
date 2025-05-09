/*EJERCICIO 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A". */

//Vers Función declarada

    //Variable externa modificable para convertir cualquier palabra.
    let palabra = 'Ana';// También se puede usar un prompt() para solicitarlo al usuario.

    //Función declarada
    function convertir(palabra) {
        //El método toUpperCase() convierte a mayúsculas, split() separa por letras en un array, y join() concatena de nuevo pero con espacios.
        let palabraConvertida = palabra.toUpperCase().split('').join(' ');
        return palabraConvertida; //variable a returnear
    }

    console.log(convertir(palabra)); //Devolución en consola


//Vers Función flecha
    const convertiraMayusculasFlecha = (palabra) => palabra.toUpperCase().split('').join(' ');
    console.log(convertiraMayusculasFlecha(palabra));



/*----------------------------------------------------------*/

/*EJERCICIO 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/

//Vers Función declarada

    //Variable externa modificable para devolver el número de palabras de cualquier palabra. 
    let nombre = 'Antonio Alberto Jesús';

    //Función declarada
    function contarPalabras(nombre) {
        //El método de array .split() separa por palabras en un array
        //El método de string .lenght devuelve el número de slots en el array creado por split
        let longitud = nombre.split(' ').length;
        return longitud; //variable a returnear
    }

    console.log(contarPalabras(nombre)); //Devolución en consola


//Vers Función flecha
    const contarPalabrasFlecha = (nombre) => nombre.split(' ').length;
    console.log(contarPalabrasFlecha(nombre));



/*----------------------------------------------------------*/

/*EJERCICIO 3:
    Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.*/

    /* 
    Inicio 
    let frase = ("frase deseada")

    function contadorLetras(frase){

        .split() -> Para separar por letras separadas dentro de un array
        let letrasSeparadas = frase.split('')
        
        .map() -> Para recorrer el array y 
        if -> condicional para Filtrar las letras que quiero
        .filter() -> Sacar las letras concretas que quiero de ese array a otro array
        
        let arrayLetras 
        
        .length() -> Cuento las letras del nuevo array con otro método de array y lo devuelvo.

        return numero de letras
    }

    console.log(contadorLetras(frase))

    Fin
    */