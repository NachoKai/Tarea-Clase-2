function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

function mostrarSalarios() {
    let $salarioMensual = document.querySelector(`#salarioMensual`)
    let salarioMensual = Number($salarioMensual.value)

    let $salarioAnual = document.querySelector(`#salarioAnual`)
    let salarioAnual = Number($salarioAnual.value)

    let nodoResultadoSalarioAnual = document.querySelector(`#resultadoSalario`)
    let resultadoSalarioAnual = calcularSalarioAnual(salarioMensual)

    let nodoResultadoSalarioMensual = document.querySelector(`#resultadoSalario`)
    let resultadoSalarioMensual = calcularSalarioMensual(salarioAnual)

    if (resultadoSalarioAnual > 0) {
        nodoResultadoSalarioAnual.className = (`valido`)
        nodoResultadoSalarioAnual.innerText = `Tu salario Anual es de $${calcularSalarioAnual(salarioMensual).toFixed(2)} Tu salario Semanal es de $${calcularSalarioSemanal(salarioAnual).toFixed(2)} Tu salario Diario es de $${calcularSalarioDiario(salarioAnual).toFixed(2)}`
    } else {
        nodoResultadoSalarioAnual.className = (`error`)
        nodoResultadoSalarioAnual.innerText = `Completa los campos correctamente`
    }

    if (resultadoSalarioMensual > 0) {
        nodoResultadoSalarioMensual.className = (`valido`)
        nodoResultadoSalarioMensual.innerText = `Tu salario Mensual es de $${calcularSalarioMensual(salarioAnual).toFixed(2)} Tu salario Semanal es de $${calcularSalarioSemanal(salarioAnual).toFixed(2)} Tu salario Diario es de $${calcularSalarioDiario(salarioAnual).toFixed(2)}`
    } else {
        nodoResultadoSalarioMensual.className = (`error`)
        nodoResultadoSalarioMensual.innerText = `Completa los campos correctamente`
    }
}

function reiniciarSalario() {
    let nodoResultadoSalarioAnual = document.querySelector(`#resultadoSalario`)
    nodoResultadoSalarioAnual.className = (``)
    nodoResultadoSalarioAnual.innerText = ``

    let nodoResultadoSalarioMensual = document.querySelector(`#resultadoSalario`)
    nodoResultadoSalarioMensual.className = (``)
    nodoResultadoSalarioMensual.innerText = ``
}

document.querySelector(`#calcularSalario`).onclick = function () {
    mostrarSalarios()
}

document.querySelector(`#resetSalario`).onclick = function () {
    reiniciarSalario()
}
