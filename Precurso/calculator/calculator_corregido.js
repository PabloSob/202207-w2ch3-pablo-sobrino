
let calculator = () => {

let primerNumero = parseInt(prompt('Introduzca el primer numero', '')),
    segundoNumero = parseInt(prompt('Introduzca el segundo numero', ''));


 
    if (isNaN(primerNumero) && !isNaN(segundoNumero)) {
    let sqr = Math.sqrt(segundoNumero);
    return "Raiz cuadrada: " + sqr;
    }
 
    

  if (!isNaN(primerNumero) && isNaN(segundoNumero)) {
    let sqr = Math.sqrt(primerNumero);
    return "Raiz cuadrada: " + sqr;
  }
 

  if(isNaN(primerNumero) && isNaN(segundoNumero)) {
      return "Por favor, introduce un numero valido"
      
  }

  else {
  
    let suma = ((+primerNumero) + (+segundoNumero)).toFixed(3);
    let resta = (primerNumero - segundoNumero).toFixed(3);
    let multiplicacion = (primerNumero * segundoNumero).toFixed(3);
    let division = (primerNumero / segundoNumero).toFixed(3);
 
    let resultado = [suma, resta, multiplicacion, division];
    
  
    
    console.log("Resultados:");
    console.log("SUMA: " + resultado[0]);
    console.log("RESTA: " + resultado[1]);
    console.log("MULTIPLICACION: " + resultado[2]);
    console.log("DIVISION: " + resultado[3]);
  

  }
}

calculator()