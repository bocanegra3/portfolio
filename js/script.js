/* //Variable: Es un espacio de memoria reservado para almacenar informacion importante del programa.
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

/*tercera clase pagina contacto*//*4

const mensaje = document.getElementById('mensaje');
const password = "123";

let descuentoInicial;
// una ciera logica que pude modificar el descuentoInicial

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado; */

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
/*ecommerce de compra de comida */
/* let total = 0;
let seleccion; 
let eliminar;
let promo;
let descuento;
do{
seleccion = prompt(
  "Bienvenido/a a la tienda, elija una comida: \n1. Hamburguesa\n2. Pizza\n3. Ensalada\n4. Quieres eliminar un producto \n5. Cupon de descuento.\n6. Finalizar compra."
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
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "4":
      do{
        eliminar = prompt(
          "Elija el menu que desea eliminar: \n le recuerdo el numero de cada uno de los productos. \n1. Hamburguesa\n2. Pizza\n3. Ensalada \n4 finalizar eliminacion."
        )
        switch(eliminar){
          case "1":
            total = total - 14000;
            console.log('Usted elimino la hamburguesa, su total es de: '+ total);
            break;
          case "2":
            total = total - 16000;
            console.log('Usted elimino la pizza, su total es de: '+ total);
            break
          case "3":
            total= total - 12000;
            console.log('Usted elimino la ensalada, su total es de: '+ total);
            break
          case "4":
            console.log('finalizo su eliminacion de productos, su total es de: '+ total);
            break;
          default:
          console.log('El valor que indico no existe, si desea finalizar la eliminacion presione 4 sino indique del 1 al 3, su total por el momento es de: '+ total);
          break;
        }
      }while(eliminar !== "4");
  break;
  case "5":
      do{
        promo = prompt (
          "Coloque el codigo del cupon de promo "
        )
        switch(promo){
          case "ahorropremier":
          descuento = total * 0.50;
          total = total - descuento;
          console.log("Su descuento Premiun es del 50% el total");
          break6
          case "ahorrosantander":
            descuento = total * 0.40;
            total = total - descuento;
            console.log("Su descuento Santander es del 40% el total");
          break
          case "ahorrocredicoop":
            descuento = total * 0.30;
            total = total - descuento;
            console.log("Su descuento Credicoop es del 30% el total");
          break;
          case "ahorromercadopago":
            descuento = total * 0.10;
            total = total - descuento;
            console.log ("Su descuento Mercado Pago es del 10% el total");
          break;
          case "8":
            console.log("El valor a abonar es: " + total);
          break;
          default:
            console.log("Usted indico un codigo incorrecto, su valor total sigue siendo de: " + total +" coloque otro codigo o precione 8 para finalizar") ;
          break
        }
      }while(promo == "8");
  break;
  case "6":
      total = total;
      console.log('Tu total es de :'+ total);
  break;
  default:
    console.log('tu seleccion es invalida, seleccione del 1 al 3 o el 4 para finalizar');
    break;
} 
} while (seleccion !== "6");
 */
/*clase 23/09 */
/* function saludar(nombre){
  console.log("hola: " + nombre);
}

let nombreUser = prompt("Ingrese su nombre: ");
saludar(nombreUser); */

/* function sumar(num1, num2){
  console.log(num1 + num2);
}

sumar(5, 10); */
//funciones flecha

const sumar = (num1, num2) => {
  console.log(num1 + num2);
}

const restar = num1 =>  console.log(num1 - 8);

restar(10);