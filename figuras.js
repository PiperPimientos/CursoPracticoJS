



//Codigo del cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}


// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm")

function areaCuadrado() {
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