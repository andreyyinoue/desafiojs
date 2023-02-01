function calc() {
    let n1 = document.getElementById('inum1')
    let n2 = document.getElementById('inum2')
    let res = document.getElementById('resultado')
    if (n1.value.length == 0 || n2.value.length == 0) {
        alert('Dados incompletos. Preencha os campos')
    } else {
        res.innerHTML = `A soma entre ${n1.value} e ${n2.value} é igual a ${Number(n1.value) + Number(n2.value)}`
    }
}