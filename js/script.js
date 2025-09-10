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