// Creating a variable to store the age value
let edad = 21;

// Creating conditional code
if (edad >= 21) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Creating variable to store string variable
let accion = "crear";

// Using switch to decide which type of text will be printed
switch (accion) {
    case "crear":
        console.log(`La acción es ${accion}.`);
        break;
    case "colocar":
        console.log(`La acción es ${accion}.`);
        break;
    case "actualizar":
        console.log(`La acción es ${accion}.`);
        break;
    case "borrar":
        console.log(`La acción es ${accion}.`);
        break;
    default:
        console.log("No hay ninguna acción.");
}

// Declaring variable to store a number
let numero = 1;

// Conditional code to determine if number is odd or even
if ((numero % 2) === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}