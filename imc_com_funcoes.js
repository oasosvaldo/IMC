function foco() {
    document.getElementById('nome').focus()
}

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2) // peso / (altura * altura)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ' Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return ' com Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return ' Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return ' Obeso'
    } else {
        return ' Obesidade Grave'
    }

}

function main() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    let res = document.getElementById('res')
    let formImc = document.getElementById('formImc')

    const imc = calcularImc(peso, altura)
    formImc.innerHTML = ''
    res.style.display = 'inline'
    res.innerHTML = `<h1>Olá ${nome}</h1><h3>Você está ${classificarImc(imc)}</h3>`
    btnInicio.style.display = 'inline'
}

function inicio() {
    window.location.reload()
}