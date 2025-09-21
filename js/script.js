//Variable: Es un espacio de memoria reservado para almacenar informacion importante del programa.
console.log("El script está funcionando correctamente!");

const titulo = document.getElementById("titulo");

let nombre;
let tituloprofesional;
let edad;

nombre = "Franco Bocanegra";
tituloprofesional="Programador full stack";
edad="31 años";

console.log(nombre);
console.log(tituloprofesional);
console.log(edad);

const DNI= 33333111;
let soltero = false;
let suma;

suma= 2*7+6+19*94;



if (suma > 20) {
  console.log("La suma es mayor que 20");
}

else {
  console.log("La suma es menor o igual a 20");
}


for (let i = -1; i < 5; i++) {
  console.log(i);
}


let i = 3;
while (i <= 5) {
  console.log(i);
  i++;
}

/* //te dice que tipo de dato es.
console.log(typeof nombre);

let num1= 3;
let num2=41;

console.log(num1 + num2);
console.log(num1 * num2);

let nombreUser= prompt("ingrese su nombre:");//se almacena dentro de la variable nombreUser
console.log(nombreUser);

alert("Hola Soy Franco");

let deseaContinuar = confirm("Desea Continuar?")
 */

/*tercera clase pagina contacto*/
const mensaje = document.getElementById('mensaje');
const password = "123";

let descuentoInicial;
// una ciera logica que pude modificar el descuentoInicial

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado;

/* 
let passwordIngresado = prompt("ingrese su contraseña"); */

/*  while (passwordIngresado != password){
  let passwordIngresado = prompt("ingrese su contraseña");
}
  */
//clase 3 
/* let edadIngresada = parseInt(prompt("ingrese su edad"))

switch(edadIngresada){
  case 18:
  console.log('sos mayor de edad');
    break;
    case 70:
      console.log('deberias estar jubilado');
      break;
      default:
        console.log('no estas entre los dos codigos');
        break;
} */

/* let total = 0;
let seleccion; 

do{
seleccion = prompt(
  "Bienvenido/a a la tienda, elija una comida: \n1. Hamburguesa\n2. Pizza\n3. Ensalada\n4. Finalizar compra"
);

switch(seleccion){
  case "1":
      total = total + 14000;
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "2":
      total = total + 16000;
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "3":
      total = total + 12000;
      console.log('Tu total hasta el momento es de: 44'+ total);
  break;
    case "4":
      total = total;
      console.log('Tu total es de :'+ total);
  break;
  default:
    console.log('tu seleccion es invalida, seleccione del 1 al 3 o el 4 para finalizar');
    break;
} 
} while (seleccion !== "4"); */
/* 
let total = 0;
let seleccion; 

do {
  seleccion = prompt(
    "Bienvenido/a a la tienda, elija una comida: \n1. Hamburguesa\n2. Pizza\n3. Ensalada\n4. Finalizar compra"
  );

  switch(seleccion){
    case "1":
      total += 14000;
      console.log('Tu total hasta el momento es de: ' + total);
      break;
    case "2":
      total += 16000;
      console.log('Tu total hasta el momento es de: ' + total);
      break;
    case "3":
      total += 12000;
      console.log('Tu total hasta el momento es de: ' + total);
      break;
    case "4":
      console.log('Tu total es de: ' + total);
      // salir del bucle inmediatamente
      break; 
    default:
      console.log('Tu selección es inválida, seleccione del 1 al 3 o el 4 para finalizar');
      break;
  }

} while (seleccion !== "4");
 */