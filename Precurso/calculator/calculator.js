const calculator = (primerNumero, segundoNumero) => {
  /* const primerNumero = parseInt(prompt("Introduzca el primer numero", ""));
  const segundoNumero = parseInt(prompt("Introduzca el segundo numero", "")); */
  console.log(primerNumero, segundoNumero);
  if (Number.isNaN(primerNumero) && !Number.isNaN(segundoNumero)) {
    const sqr = Math.sqrt(segundoNumero);
    return `Raiz cuadrada: ${sqr}`;
  }

  if (!Number.isNaN(primerNumero) && Number.isNaN(segundoNumero)) {
    const sqr = Math.sqrt(primerNumero);
    return `Raiz cuadrada: ${sqr}`;
  }

  if (Number.isNaN(primerNumero) && Number.isNaN(segundoNumero)) {
    return "Por favor, introduce un numero valido";
  }
  const suma = (+primerNumero + +segundoNumero).toFixed(3);
  const resta = (primerNumero - segundoNumero).toFixed(3);
  const multiplicacion = (primerNumero * segundoNumero).toFixed(3);
  const division = (primerNumero / segundoNumero).toFixed(3);

  const resultado = [suma, resta, multiplicacion, division];
  return resultado;
};

export default calculator;
