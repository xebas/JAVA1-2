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

// -----------------------------------------------------------------------
// IF / ELSE
// Sintaxis 
// if (condition) {
//     instrucciones si se cumple
// } else {
//     instrucciones si no se cumple
// }

// Ejemplo1 : Comprobar el mayor de dos números 
// var num1 = Number(prompt("Dime un numero"));
// var num2 = Number(prompt("Dime otro numero"));

// if(num1 > num2){
//     console.log(num1 + " es mayor a " + num2);
// }else if(num2 > num1){
//     console.log(num2 + " es mayor a " + num1);
// }else{
//     console.log("los números son iguales");
// }

// Ejemplo2: validación de contraseña
// REGISTRO
// var passDB = prompt("Registra tu contraseña (min 6 caract)");
// if (passDB.length < 6){
//     console.log("La contraseña tiene menos de 6 caract");
// }else{ // pass ok
//     console.log("Contraseña registrada correctamente");
//     // LOGIN
//     var passUser = prompt("Introduce tu contraseña");
//     if (passDB != passUser) {
//         console.log("Contraseña incorrecta!");
//     }else{
//         console.log("Login correcto!");
//     }
// }

// Ejemplo3: login con email y contraseña

// var emailDB = "armand@gmail.com";
// var passDB = "123456";

// var emailUSER = prompt("Introduce tu email");
// var passUSER = prompt("Introduce tu contraseña");

// if (emailDB == emailUSER && passDB == passUSER) {
//     console.log("Login OK!!!");
// }else{
//     console.log("Login KO!!!");
// }

// ---------------------------------------------------------------------
// SWITCH: utilizamos SWITCH cuando conocemos los datos a comparar
// sintaxis
// switch (key) {
//     case value:
        
//         break; // salta fuera de la estructura de control

//     default:
//         break;
// }

// Ejemplo: Registro de horario de un curso
// var horario = prompt("Elige un horario de curso (mañana/tarde)");

// switch (horario){
//     case "mañana":
//         console.log("Has elegido horario de mañana");
//         break;
//     case "tarde":
//         console.log("Has elegido horario de tarde");
//         break;
//     default:
//         console.log("No has añadido un horario correcto!");
//         break;
// }




