function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

function restar(primerNumero, segundoNumero) {
    return primerNumero - segundoNumero;
}

function multiplicar(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
}

function dividir(primerNumero, segundoNumero) {
    return primerNumero / segundoNumero;
}

function reiniciarResultado() {
    let nodoResultado = document.querySelector(`#resultado`)
    nodoResultado.className = (``)
    nodoResultado.innerText = ``
}

let suma = document.querySelector(`#suma`)
let resta = document.querySelector(`#resta`)
let multiplicacion = document.querySelector(`#multiplicacion`)
let division = document.querySelector(`#division`)
let primerNumero = document.querySelector(`#primerNumero`).value
let segundoNumero = document.querySelector(`#segundoNumero`).value
let resultado = document.querySelector(`#resultado`)

document.querySelector(`#calcular`).onclick = function () {
    mostrarResultado()
}

document.querySelector(`#reset`).onclick = function () {
    reiniciarResultado()
}

function mostrarResultado() {
    let $primerNumero = document.querySelector(`#primerNumero`)
    let primerNumero = Number($primerNumero.value)
    let $segundoNumero = document.querySelector(`#segundoNumero`)
    let segundoNumero = Number($segundoNumero.value)
    let nodoResultado = document.querySelector(`#resultado`)
    let suma = document.querySelector(`#suma`)
    let resta = document.querySelector(`#resta`)
    let multiplicacion = document.querySelector(`#multiplicacion`)
    let division = document.querySelector(`#division`)
    let calculoSuma = sumar(primerNumero, segundoNumero)
    let calculoResta = restar(primerNumero, segundoNumero)
    let calculoMultiplicacion = multiplicar(primerNumero, segundoNumero)
    let calculoDivision = dividir(primerNumero, segundoNumero)

    if (suma.checked = true) {
        nodoResultado.className = (`valido`)
        nodoResultado.innerText = `${primerNumero} + ${segundoNumero} = ${calculoSuma}`
    } else if (resta.checked = true) {
        nodoResultado.className = (`valido`)
        nodoResultado.innerText = `${primerNumero} - ${segundoNumero} = ${calculoResta}`
    } else if (multiplicacion.checked = true) {
        nodoResultado.className = (`valido`)
        nodoResultado.innerText = `${primerNumero} * ${segundoNumero} = ${calculoMultiplicacion}`
    } else if (division.checked = true) {
        nodoResultado.className = (`valido`)
        nodoResultado.innerText = `${primerNumero} / ${segundoNumero} = ${calculoDivision}`
    } else {
        nodoResultado.className = (`error`)
        nodoResultado.innerText = `Completa los campos correctamente`
    }
}
