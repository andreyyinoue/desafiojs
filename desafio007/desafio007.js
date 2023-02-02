function calc() {
    let n1 = document.getElementById('inota1')
    let n2 = document.getElementById('inota2')
    let res = document.getElementById('resultado')
    if (n1.value.length == 0 || n2.value.length == 0) {
        alert('Erro! Digite dois valores.')
    } else if (n1.value < 0 || n2.value < 0) {
        alert('Erro! Digite apenas números igual ou maior que zero(0)') 
    } else {
        res.innerHTML = `A média aritmética entre ${n1.value} e ${n2.value} é igual a ${(Number(n1.value) + Number(n2.value))/2}`
    }
}