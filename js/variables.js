// VARIABLES
// def: celdas de memoria donde podemos almacenar diferentes tipos de datos
// ----------------------------------
// tipos de variables
// NUMÉRICAS
var x = 5;
var y = 2.5;
//TEXTO o STRING
var saludo = "Hola";
var despedida = 'Adios';
// BOOLEAN
var verdadero = true;
var falso = false;
// ARRAY
var coches = ["Seat","BMW","Ford","Fiat"];
// otra manera: creando un Objeto de la clase predefinida de JS: Array
// var coches = new Array("Seat", "BMW", "Ford", "Fiat")
var long_array_coches = coches.length;
var Ford = coches[2];
// ----------------------------------------
// VAR , LET y CONST
// var: variable definida (puedo acceder a ella) en cualquier punto del documento JS. 
var z = 5;
// luego puedo acceder a ella:
z = 6;

// const: define un valor constante. No podremos cambiar su valor 
const c = 10;
// c = 11; // error!!!

// let: variable que se accede SÓLO en el bloque en el cual está definida
if(true){
   let i = 1;
}
//  alert(i); // error!!!
// ----------------------------------
// TIPOS DE OPERADORES
// +   :   suma
// -   :   resta
// *   :   multiplicacion
// /   :   division
// %   :   modulo  
// ++  :   incremento en una unidad
// --  :   decremento en una unidad

var num1 = 10;
var num2 = 20;

var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;




