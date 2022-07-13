

// Funcion
function calculatorPro() {

// Variables generales
    let newNumber;
    let numberList = [];

// Variables para operaciones
    let suma;
    let resta;
    let mult;
    let divi;
    let raiz;
    let resultados = [];

// Condicion para que salte la ventana emergente "hasta"
do {
      newNumber = prompt('Enter a number or press cancel to stop');

// Condicion para que almacene en caso de ser un número
if(Number(newNumber)){
      numberList.push(newNumber)
}

// Condicion para que si no es un numero, salte el alert, pero siga aceptando valores
if(!Number(newNumber)){
          alert("Please insert a valid number")
}
// Condicion para que termine de recoger valores (hasta) en caso de darle a cancelar
} while (newNumber !== null)


// Transformar los numeros recogidos en forma de string a numeros para poder operar
for(let i = 0; i<numberList.length; i++){
        numberList[i] = parseFloat(numberList[i])
}


// Si se recoge solo un numero sacar la raiz cuadrada indicandole donde se va a guardar el resultado
if (numberList.length == 1){
    raiz = Math.sqrt(numberList[0])
    resultados = [raiz]


// Presentar el resultado para un solo numero
    console.log("The result of the square root "+numberList[0]+" is: "+resultados[0])


// Si se recoge mas de un numero operar
// Indicarle donde se van a almacenar
}else{
        (numberList.length > 1)
        suma = numberList[0]
        resta = numberList[0]
        mult = numberList[0]
        divi = numberList[0]

// Indicarle como se van a calcular      
        for(let i=1; i < numberList.length; i++){
        suma = suma + numberList[i]
        resta = resta - numberList[i]
        mult = mult * numberList[i]
        divi = divi / numberList[i]
        
        }
        resultados = [suma, resta, mult, divi]


// Presentar los resultados para mas de un numero introducido
        console.log("Inserted numbers: " + numberList)
        console.log("The sum is: " + resultados[0].toFixed(3))
        console.log("The subtraction is : " + resultados[1].toFixed(3))
        console.log("The multiplication is : " + resultados[2].toFixed(3))
        console.log("The division is : " + resultados[3].toFixed(3))
    
}
//Preguntar si hacer más operaciones
if(confirm("Create new calculations?? ")){
    calculatorPro()
}
else console.log("Bye!")

}
// Llamar a la funcion
calculatorPro()


/*DUDAS EXISTENCIALES:

1) Como poner el toFixed bien, que solo salte cuando haya 3 decimales y no siempre 
2) Como se podría hacer con un switch 
3) Como se podría hacer con returns 
4) Como se podrían implementar operadores ternarios para simplificar todas las vueltas que he dado
5) Entendí que poniendo un + delante del promp es el equivalente al parseFloat, pero no me daban los resultados, vale de algo entonces ese "+prompt"?*/