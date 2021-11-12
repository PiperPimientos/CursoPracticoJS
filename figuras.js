

// Encapsulando código en funciones 7/24

// Lecturas recomendadas

 
// Curso de Closures y Scope en JavaScript - Platzi
// https://platzi.com/cursos/scope/

// Tendremos que poder usar distintas funciones para que las medidas no siempre sean igual y poder encapsular nuestro código para no repetir y poder reutilizar.
// A todas las variables que creamos para decir tanto lado y/o base, perímetro, área, radio, circunferencia, las convertiremos en funciones.
// Ya no utilizaremos const sino la palabra function, recordando que las funciones siempre necesitan paréntesis y los atributos se guardan dentro de estas entre llaves.
// Los atributos en una funcion llevan la palabra reservada return para devolver algo que queramos, como por ejemplo definir el perimetroCuadrado como 
// return ladoCuadrado * 4
// Ademas recordemos que las funciones reciben parámetros que se reciben al llamar a nuestra funcion en el futuro.
// Despues en el futuro cuando recibimos la funcion perimetoCuadrado() podremos darle como parámetro el numero que queremos.
// En este caso solo tendremos que utilizar el parámetro lado y ya no la variable ladoCuadrado.
// Y esto hacemos también con área cuadrado.
// Si ahora nos vamos a la consola del navegador, nos daremos cuenta que si llamamos la funcion perimetroCuadrado e introducimos como parámetro un numero para reemplazar al parámetro lados, significa que ya no tendremos que crear una variable cada ve que sea necesario.
 
// Recordemos que cuando tenemos una funcion con un parámetro, ya no es un parámetro a introducir, sino un argumento, como en este caso
// Ahora lo haremos uno por uno hasta llegar al circulo.
// En el circulo notaremos que en la circunferencia para llamar al diámetro, podremos utilizar una constante diámetro que tendra el valor de diámetroCirculo con su parámetro(radio).


// Interactuando con JavaScript desde HTML 8/24
// Vamos a colocar un formulario en nuestro html para que nuestros usuarios puedan interactuar con la lógica de JavaScript y decidir por ejemplo cuanto miden los lados del cuadrado y las demás medidas.
// Vamos a crear un botón en ese formulario que al darle click ejecute el código de JS.
// El tercer paso es crear esa funcion de JS que se va llamar cuando los usuarios le den click al botón  para mostrarles el resultado de su calculo.
// 1.	Vamos a nuestro archivo HTML y crearemos una etiqueta header para meter el titulo 1 y luego un texto para decir que este es el primer curso practico de JS.
// 2.	Abajo del header vamos a crear una sección donde vamos a crear un formulario.
// En esta sección tendremos un titulo h2 que diga Calcula el área y perímetro de un cuadrado
// Luego abrimos una etiqueta form, que a su vez contendrá una etiqueta label que nos indicara que hacer en la siguiente etiqueta, y contendrá el mensaje de Escribe cuando mide cada lado de tu cuadrado
// Esa siguiente etiqueta es un input que recordemos que es una sola, se abre y se cierra en una sola etiqueta.
// Luego vienen dos botones, en uno “Calcular perímetro” y en el otro “Calcular el área”
// En el input vamos a definir el tipo de nuestro input. 
// Como queremos que nos den numeros, utilizamos el atributo type=”number”

 

// Si cuando le damos click a los botones se refresca la pagina es porque no estamos especificando que hace el botón.

// Por defecto, todos los botones refrescan la pagina y son de tipo submit .

// Para ello le daremos type=”button” a todos nuestros botones.

// 3.	Ahora nuestros input les pondremos un identificador único, esto para conectar nuestro label con el input, con el atributo for=”InputCuadrado”

// 4.	Para que los botones puedan reaccionar y ejecutar una funcion de Javascript agregaremos un atributo llamado onclick=”calcularPerimetroCuadrado()”

// Colocando el nombre de esa funcion entre las comillas

// Igualmente crearemos la de “calcularAreaCuadrado”

// 5.	Ahora vamos a JavaScript a crear esas funciones.

// a.	Primero crearemos function calcularPerimetroCuadrado() { }

// Aquí necesitaremos calcular el valor que las personas hayan introducido en el input que pusimos en HTML

// Para hacer esto vamos a la consola y llamamos document.getElementById(“InputCuadrado”)

// Ahí aparece el input y aparece resaltado en el HTML

 

// Esto es porque JavaScript por defecto nos permite leer nuestro contenido HTML y además nos permite manipularlo.

// Para eso específicamente sirve el getElementById y lo utilizaremos en nuestras funciones.

// b.	Para seguir con nuestras funciones haremos una constante
// const input = document.getElementById(“InputCuadrado”);

// Pero como queremos solo el valor de la etiqueta agregaremos a la funcion otra constante llamada value. Tenemos que llamar al input y su propiedad .value
// const value = input.value;

// c.	Ahora haremos que cada vez que se ejecute esta funcion, se le muestre un alert a la persona que le muestre el perímetro del cuadrado
// Para ello traeremos nuestra funcion perímetroCuadrado(), que nos mostrara cual es ese perímetro que se calcula.
// Le tendremos que enviar como argumento cuanto miden los lados, que es lo que guardamos en la const value

// const perímetro = perimetroCuadrado(value);

// d.	Como no queremos que los usuarios abran la consola, haremos algo mas visual
// Haremos el llamado a un alert() y dentro del alert llamaremos a la constante perimetro

// alert(perimetro);

// Ahora solo tendremos que copiar este mismo código para la funcion de calcularAreaCuadrado() y reemplazar

// Si vemos nuestro HTML y cerramos la consola, podemos ingresar por ejemplo un 5 como lado del cuadrado. Si calculamos el perímetro, vemos como claramente funciona.

 
// Sin embargo las alertas son incomodas, tenemos que hacer que nuestra aplicación funcione para seguir trabajando.

// RETO: hacer las etiquetas y funciones para triángulos y círculos y agregarles estilos CSS







//Codigo del cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}


// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm2")

console.groupEnd();



//Codigo del triangulo

console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden:" 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//     );

function alturaTriangulo(altura) {
    return altura;
}

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura) {
    return base * altura;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo mide: " + areaTriangulo + "cm2")

console.groupEnd();




//Codigo del circulo

console.group("Circulo")

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + "cm") 

// //Diametro

function diametroCirculo(radio) {
    return radio * 4
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es " + radioCirculo + "cm")

//PI
const PI = Math.PI;
console.log("PI es igual a " + PI)


//Circunferencia

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const circunferencia = diametroCirculo * PI;
// console.log("La circunferencia del circulo es " + circunferencia + "cm")

//Area

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es " + areaCirculo + "cm2")

console.groupEnd();



// Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}