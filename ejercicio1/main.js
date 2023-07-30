// ...................Ejercicio 1 ..............
const input1 = document.querySelector("#input1");
const mensaje1 = document.querySelector("#mensaje1");
const btn1 = document.querySelector("#btn1");

function imprimir(texto) {
    mensaje1.innerText = "El texto escrito es " + texto;
}

function administrar(callback, input) {
    callback(input);
}

btn1.addEventListener('click', () => {
    administrar(imprimir, input1.value);
})

// ....................Ejercicio 2 ......................
const input2 = document.querySelector("#input2");
const mensaje2 = document.querySelector("#mensaje2");
const btn2 = document.querySelector("#btn2");

function tipoVariable(texto) {
    mensaje2.innerText = "El tipo de variable es " + typeof texto + " y su contenido es " + texto;
}

function administrar2(callback, input) {
    callback(input);
}

btn2.addEventListener('click', () => {
    administrar2(tipoVariable, input2.value);
})

// ...........................Ejercicio 3 ...............
const input31 = document.querySelector("#input31");
const input32 = document.querySelector("#input32");
const ope = document.querySelector("#operacion");
const mensaje3 = document.querySelector("#mensaje3");
const btn3 = document.querySelector("#btn3");

let resultado = 0;
function suma(a, b) {
    resultado = a + b;
    mensaje3.innerText = "El resultado es: " + resultado;
}
function resta(a, b) {
    resultado = a - b;
    mensaje3.innerText = "El resultado es: " + resultado;
}
function multiplicacion(a, b) {
    resultado = a * b;
    mensaje3.innerText = "El resultado es: " + resultado;
}
function division(a, b) {
    resultado = a / b;
    mensaje3.innerText = "El resultado es: " + resultado;
}

function operacion(callback, a, b) {
    callback(a, b);
}

btn3.addEventListener('click', () => {
    let num1 = parseInt(input31.value);
    let num2 = parseInt(input32.value);

    if (ope.value == "suma") {
        operacion(suma, num1, num2);
    }
    if (ope.value == "resta") {
        operacion(resta, num1, num2);
    }
    if (ope.value == "multiplicacion") {
        operacion(multiplicacion, num1, num2);
    }
    if (ope.value == "division") {
        operacion(division, num1, num2);
    }
})

// ...........................Ejercicio 4 ...............
const input4 = document.querySelector("#input4");
const mensaje4 = document.querySelector("#mensaje4");
const btn41 = document.querySelector("#btn41");
const btn42 = document.querySelector("#btn42");

function mayuscula(a) {
    mensaje4.innerText = "El resultado es: " + a.toUpperCase();
}
function minuscula(a) {
    mensaje4.innerText = "El resultado es: " + a.toLowerCase();
}

function administrar4(callback, a) {
    callback(a);
}

btn41.addEventListener('click', () => {
    administrar(mayuscula, input4.value);

});

btn42.addEventListener('click', () => {
    administrar(minuscula, input4.value);
})



