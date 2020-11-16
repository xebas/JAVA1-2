// COMPARACIONES
// OPERADOR    DESCRIPCION
// ==          Igual ...    
// !=          Diferente a ...
// >           Mayor a ... 
// <           Menor a ... 
// >=          Mayor o igual a ... 
// <=          Menor o igual a ... 

// CONCATENACION DE COMPARACIONES 
// OPERADOR    DESCRIPCION 
// &&          AND: Devuelve un TRUE si todos las comparaciones se cumplen
// ||          OR: Devuelve un TRUE si ALGUNA de las comparaciones se cumple
// !           NOT: Inverte estado Booleano 

// -----------------------------------------------------

// WHILE
// sintaxis:
// while (condition) {
    // ejecuta instrucciones
// }
//  Ejemplo: Imprimir los numeros del 1 al 5
// SIN BUCLES:
// console.log(1);
// console.log(2);
// . 
// .
// console.log(5);

var i = 1; // INICIALIZAR VARIABLE CONTADORA
while (i <= 5) { // COMPARAR VARIABLE CONTADORA
    console.log(i);
    i++; // ACTUALIZAR VARIABLE CONTADORA
}
// -----------------------------------------------------
// DO-WHILE: lo mismo que el WHILE, pero ejecuta antes y luego compara
// sintaxis: 
// do {
    
// } while (condition);

// Ejemplo: Preguntar por una contraseña hasta que sea correcta
// var passDB = "123456";

// do{
//     var passUSER = prompt("Introduce tu contraseña");
// } while (passDB != passUSER)

// -----------------------------------------------------
// FOR : bucle que se utiliza mayoritariamente en arrays
// sintaxis:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Ejemplo1: Imprimir los numeros del 1 al 5
for(var i=1 ; i<=5 ; i++){
    console.log(i);
}

var leng_prog = ["JS","PHP","SQL","Python","C++","R"];

for (let i = 0; i < leng_prog.length; i++) {
    console.log(leng_prog[i]); 
}

