/*Unidad 1*/


/*Ejerc 1 Nombre y Apellido*/
var Usuarionombre = "Juan";
var Usuarioapellido = "Perez";

console.log(Usuarionombre + " " + Usuarioapellido)

/*Ejerc 2 Promedio de 3 Notas*/

var nota1 = 5;
var nota2 = 7;
var nota3 = 8;

console.log(nota1 + nota2 + nota3)

/*Ejerc 3 Perímetro Triangulo*/

var lado1 = 5
var lado2 = 5
var lado3 = 7

console.log(lado1 + lado2 + lado3)

/*Ejerc 4 Perímetro y Área del Cuadrado*/

var cuadradolados = 6

console.log((cuadradolados * 4) + (lado1 + lado2 + lado3))

/*Ejerc 5 Perímetro y Área del Rectángulo*/

var rectladoA = 5
var rectladoB = 8

console.log("Perímetro Rectángulo=" + " " + (rectladoA * 2) + (rectladoB * 2))

var base = 12
var altura = 8

console.log("Área Rectángulo=" + " " + (base * altura))

/*Ejerc 6 Resto de Div. Entera entre los valores*/

var numer1 = 10
var numer2 = 3

console.log(10 % 3)

/*Ejerc 7 msje:"Bienvenido"+ N y A del Usuario*/

var nombreUser = "Mariela"
var apellidoUser = "Tedesco"

console.log(" Bienvenido" + " " + nombreUser + " " + apellidoUser)

/*Ejerc 8 Perímetro y Área del Círculo*/

var radio = 4

console.log("Perímetro Circulo =" + " " + (2 * 3.1416 * radio))

console.log("Área Circulo =" + " " + 3.1416 * (radio * radio))

/*Unidad 2*/

/*Ejerc 9 Nombre y Apellido + Bienvenida*/


const usernombreserver = "Ariel"
const userapellidoserver = "Perez"

var nombreUser1 = "Ariel"
var apellidoUser2 = "Perez"

if (usernombreserver == nombreUser1 && userapellidoserver == apellidoUser2) {

    console.log("Bienvenido" + " " + nombreUser1 + " " + apellidoUser2)
}

/*Ejerc 10 User ingrese Diámetro Circulo calcular Perímetro y área*/

//radio=x
//diámetro= 2*x 
//perímetro=d*3.1416
//área=3.1416*(x*x) 

//user ingresa valor del díametro ej= 8

var diametro = 8

console.log("Perímetro =" + " " + diametro * 3.1416 + " " + "Área = " + " " + 3.1416 * (diametro * diametro) / 4)
/* es lo mismo que decir ( 3.1416 * (diametro/2)*(diametro/2) ) */


/*Ejerc 11. User ingresa 4 números sumar y sacar promedio ( es decir, sumar los 4 y dividir el rdo *4 para sacar el promedio)*/

var number1 = 2
var number2 = 4
var number3 = 6
var number4 = 8
var suma = (number1 + number2 + number3 + number4)
console.log("Suma =" + " " + (suma) + " " + "Promedio =" + " " + (suma) / 4)


/*Ejerc 12 Sueldos de una Empresa valor por horas - cant de horas trab. por mes y calcular sueldo mensual  */

/* var hora = 550
var horas = prompt("ingrese la cantidad de horas trabajadas")
console.log("Sueldo Mensual:  " + (hora * horas))

alert("Sueldo Mensual:  " + (hora * horas)) */



/*Ejerc 13 Agregar Años de Antiguedad + bono 15% del sueldo por cada año de antiguedad*/

/* var valorhora = 550
var cantidadhoras = prompt("ingrese la cantidad de horas trabajadas")
var antiguedad = prompt("Ingrese cantidad de años de antiguedad")
var subtotal = (valorhora * cantidadhoras)
var bono = (subtotal * 15) / 100

var sueldo = ((bono * antiguedad) + subtotal)


console.log("Sueldo Mensual:  " + sueldo)

alert("Sueldo Mensual:  " + sueldo) */


/*Ejerc 14 valor de 1 horas - cant hs trab mes- */

/* var horavseg=prompt("ingrese el valor de hora")
var horasvtb= prompt("ingrese la cantidad de horas trabajadas")
var antigvseg= prompt("Ingrese cantidad de años de antiguedad") 
var seguros= prompt("Ingrese cantidad de seguros vendidos") 
var precseguro= prompt("Ingrese valor seguro") 
var bnoseguro= (precseguro*50)/100
var sueldovseg= (horavseg*horasvtb)
var bono25vseg= ((sueldovseg * 25)/100)*seguros
var bono15vseg= ((sueldovseg*15)/100)*antigvseg
var sueldovendseg= sueldovseg + bnoseguro + bono25vseg + bono15vseg  
var valorhoravseg= sueldovendseg / horasvtb

console.log( "sueldo mensual vendedor de seguros: " + sueldovendseg + " Valor por Hora: " + valorhoravseg)
  */


                            /*Unidad 3*/

/*Ejerc 15 Numero cero par o impar*/

/* const numero15 = Number(prompt("Ingrese un numero:"));
// Comprobar si el numero es cero
if (numero15 === 0) {
  console.log("El numero ingresado es cero.");
} else if (numero15 % 2 === 0) {
  // Comprobar si el numero es par
  console.log("El numero ingresado es par.");
} else {
  // ultima opcion es impar
  console.log("El numero ingresado es impar.");
} */



/*Ejerc 16 Numero, es multiplo de 3*/
/* const numero16 = Number(prompt("Ingrese un numero:"));

// Comprobar si el numero es multiplo de 3
if (numero16 % 3 === 0) {
  console.log("El numero ingresado es multiplo de 3.");
} else {
  console.log("El numero ingresado no es multiplo de 3.");
} */


/*Ejerc 17 Letra, si es una Vocal*/
/* const letra17 = prompt("Ingrese una letra:"); // Convertir a minusculas para simplificar la comparacion

// Comprobar si la letra es una vocal
if (letra17.length === 1) {
    if(letra17=="a"|| letra17=="e"|| letra17=="i"|| letra17=="o"|| letra17=="u"|| letra17=="A"|| letra17=="E"|| letra17=="I"|| letra17=="O"|| letra17=="U"){
        console.log("La letra ingresada es una vocal.");
    }else{
        console.log("La letra ingresada no es una vocal.");
    }
} else {
  console.log("ingreso mas de un caracter");
} */


/*Ejerc 18 Rango Numerico y un Numero. N pertenece al rango / N es par / no pertenece al rango / es impar ( dif min 5 number enteros) */
/* const extremoInferior = Number(prompt("Ingrese el extremo inferior del rango:"));
const extremoSuperior = Number(prompt("Ingrese el extremo superior del rango (debe ser al menos 5 números mayores que el extremo inferior):"));
const numero18 = Number(prompt("Ingrese un numero:"));

// Verificar si el rango es valido (diferencia minima de 5 numeros)
if (extremoSuperior - extremoInferior >= 5) {
  if (numero18 >= extremoInferior && numero18 <= extremoSuperior) {
    console.log("El numero esta dentro del rango.");
    if (numero18 % 2 === 0) {
      console.log("El numero es par.");
    } else {
      console.log("El numero es impar.");
    }
  } else {
    console.log("El numero esta fuera del rango.");
    if (numero18 % 2 !== 0) {
      console.log("El numero es impar.");
    }
  }
} else {
  console.log("El rango no tiene una diferencia minima de 5 numeros.");
} */



/*Ejerc 19 User ingrese 2 number + 1 operador* calular operacion*/
/* const numero1 = Number(prompt("Ingrese el primer numero:"));
const numero2 = Number(prompt("Ingrese el segundo numero:"));
const operador = prompt("Ingrese el operador (+, -, *, /):");
var resultado;

//operaciones
switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("No es posible dividir por cero.");
        }
        break;
    default:
        console.log("Operador no valido. Utilice +, -, *, o /.");
}
//resultado
console.log("El resultado de la operacion es: " + resultado); */



/*Ejerc 20 / 3 lados de triangulo / informar triang EQUILATERO - ISOSCELES - ESCALENO */
/* const lado1_20 = Number(prompt("Ingrese la longitud del primer lado:"));
const lado2_20 = Number(prompt("Ingrese la longitud del segundo lado:"));
const lado3_20 = Number(prompt("Ingrese la longitud del tercer lado:"));

// tipo triangulo
if (lado1_20 === lado2_20 && lado2_20 === lado3_20) {
  console.log("El triangulo es equilatero.");
} else if (lado1_20 === lado2_20 || lado1_20 === lado3_20 || lado2_20 === lado3_20) {
  console.log("El triangulo es isosceles.");
} else {
  console.log("El triangulo es escaleno.");
} */



/*Ejerc 21 Sueldo / Categoria define sueldo basico mensual 
a. cat 1 + 20hs extras bono u$s500
b. cat 3 + 30hs extras bono u$s1000
----indique si supera sueldo u$s 4000----*/

/* const categoria = Number(prompt("Ingrese la categoria (1, 2 o 3):"));
const horasExtras = Number(prompt("Ingrese la cantidad de horas extras trabajadas:"));

// Definir sueldo por categoria
var sueldoBasico;

switch (categoria) {
    case 1:
        sueldoBasico = 2000;
        break;
    case 2:
        sueldoBasico = 3000;
        break;
    case 3:
        sueldoBasico = 4000;
        break;
    default:
        console.log("Categoria no valida.");
}

// Inicio sueldo mensual ya es el sueldo basico seleccionado
var sueldoMensual = sueldoBasico;

// Calculo bonos x horas extras segun la categoria
if (categoria === 1 && horasExtras > 20) {
    sueldoMensual = sueldoMensual + 500;
} else if (categoria === 3 && horasExtras > 30) {
    sueldoMensual += 1000;
}

//Si el sueldo supera los 4000 dolares
if (sueldoMensual > 4000) {
    console.log("El sueldo mensual del empleado supera los 4000 dolares.");
} else {
    console.log("El sueldo mensual del empleado no supera los 4000 dolares.");
}

console.log("El sueldo mensual del empleado es: $" + sueldoMensual);
 */


/*Unidad 4*/


/*Ejerc 22 3 number  / múltiplo de 3 / múltiplo de 5 / múltiplo de ambos / de ninguno */

/*Ejerc 23 Rango Númerico / valores desconocidos / cada number pertenece al grupo / si pertence info si es par / si no pertenece info si es impar/ rango dif min de 5 number enteros */

/*Ejerc 24 2 Number y 1 operador / calcular e info c/ operacion entre los 2 number*/

/*Ejerc 25 Notas Parcial comisión / se desconoce cant Alumnos / info porcentaje alumn Aprob. Desapb y promedio notas ( aprb igual o sup a 4 / desap inferior a 4)*/

/*Ejerc 26 cant Number Desconocida / calcular 
    a. Suma valores 
    b. el menos valor 
    c. el mayor valor*/

/*Ejerc 27 Encuesta: H / M (sexo) - Edad (años) /Altura (cm) - 
a. porcentaje de M mayores 25 años
b. porcentaje de H menor a 18 años
c. Promedio Edad M
d. Promedio Altura H
e. Menor Edad Ingresada
f. Mayor altura Ingresada*/

