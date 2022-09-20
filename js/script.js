//Let (se usa para variables que pueden camiar su valor)

//Const (se usa para variables constantes)



//      Operaciones Basicas (NUMBER)

// 1-- Defino los numeros de la operacion

let numeroA = 10
let numeroB = 5

// 2-- Defino la operacion en si con las variables anteriores

let resultado = numeroA + numeroB

// 3-- Usamos "consoloe.log() para ver el resultado en "inspeccionar/console", si agregamos comillas y coma antes, podemnos asignar un nombre a la operacion en la consola


console.log("resultado",resultado)


//      Operaciones Basicas (STRING) (CONCATENACION)

let stringA = "Coder"  
let stringB = "House"
let espacio = " "

let resultadoConcatenacionA = stringA + stringB
let resultadoConcatenacionB = stringA + espacio + stringB

console.log("resultado de concatenacion: A", resultadoConcatenacionA)
console.log("resultado de concatenacion: B", resultadoConcatenacionB)



//      "Prompt": Sirve para dar entrada a valores que el usuario inserta. Los devuelve y para que sean almacenados hay que guardarlos en una variable.

let datoA = prompt("Ingrese un Numero")

// Agrego un "console.log" para ver el dato inglresado.

console.log("datoA", datoA)


//      "Alert": Muestra un mensaje al usuario

alert("Bienvenido")



//     Flujo de datos

// Mostrar prodiuctos -> Cantidad de productos -> Mostrar precio total

// Mostrar productos
let productoA = "Mesa"
let precioProductoA = 200

let productoB = "Silla"
let precioProductoB = 100

alert("Acepte si quiere comprar " + productoA + " y " + productoB )

// Cantidad de productos
let cantidadProductoA = prompt ("Ingrese cantidad de " + productoA + " que desea comprar")
let cantidadProductoB = prompt ("Ingrese cantidad de " + productoB + " que desea comprar") 

let precioTotalA =  cantidadProductoA * precioProductoA
let precioTotalB =  cantidadProductoB * precioProductoB

let precioFinal = precioTotalA + precioTotalB

// Mostrar precio total
alert("Precio Final " + precioFinal) 