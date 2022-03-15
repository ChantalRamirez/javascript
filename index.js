let num1 = parseFloat(prompt('dame un numero')); 
let num2 = parseFloat(prompt('dame otro numero')); 

function sumar(num1, num2) { //parametros
    let suma = num1 + num2;
    return suma;  
}

let resultado = sumar(num1, num2);

console.log(resultado);
console.log(sumar(num1, num2));

//funciones de flecha---arrow function

// const imprimirFrase = nombre => 'Hola '+nombre;

//template string  o interpolación 
const imprimirFrase = nombre => `Hola ${nombre}`;

let nombre = 'Yessica';

console.log(imprimirFrase(nombre));

//objetos

const carro ={
    color: 'rojo',
    marca: 'toyota',
    funciones:{
        acelera: 160,
        frena: 0, 
               
    }
}

// let color = carro.color
// console.log(color);
console.log(carro.marca);
console.log(carro.funciones);

//destructuring object

const {color} = carro;
console.log(color);








