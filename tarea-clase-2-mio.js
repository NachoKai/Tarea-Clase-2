const sumar = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
const restar = (primerNumero, segundoNumero) => primerNumero - segundoNumero;
const multiplicar = (primerNumero, segundoNumero) => primerNumero * segundoNumero;
const dividir = (primerNumero, segundoNumero) => primerNumero / segundoNumero;

function mostrarResultado() {
  const $primerNumero = document.querySelector("#primer-numero");
  const primerNumero = Number($primerNumero.value);
  const $segundoNumero = document.querySelector("#segundo-numero");
  const segundoNumero = Number($segundoNumero.value);
  const nodoResultado = document.querySelector("#resultado");
  const suma = document.querySelector("#suma");
  const resta = document.querySelector("#resta");
  const multiplicacion = document.querySelector("#multiplicacion");
  const division = document.querySelector("#division");
  const calculoSuma = sumar(primerNumero, segundoNumero);
  const calculoResta = restar(primerNumero, segundoNumero);
  const calculoMultiplicacion = multiplicar(primerNumero, segundoNumero);
  const calculoDivision = dividir(primerNumero, segundoNumero);

  if (suma.checked) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `${primerNumero} + ${segundoNumero} = ${calculoSuma}`;
  } else if (resta.checked) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `${primerNumero} - ${segundoNumero} = ${calculoResta}`;
  } else if (multiplicacion.checked) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `${primerNumero} * ${segundoNumero} = ${calculoMultiplicacion}`;
  } else if (division.checked) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `${primerNumero} / ${segundoNumero} = ${calculoDivision}`;
  } else {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Completa los campos correctamente";
  }
}

function reiniciarResultado() {
  const nodoResultado = document.querySelector("#resultado");
  nodoResultado.className = "";
  nodoResultado.innerText = "";
}

document.querySelector("#calcular").onclick = () => mostrarResultado();
document.querySelector("#reset").onclick = () => reiniciarResultado();
