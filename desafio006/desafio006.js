function calc() {
    let n = document.getElementById('inum')
    let res = document.getElementById('resultado')
    if (n.value.length == 0) {
        alert('Ação inválida. Digite um número')
    } else if (n.value >= 0){
        res.innerHTML = `Valor digitado: ${Number(n.value)}<br>` 
        res.innerHTML += `Dobro = ${Number(n.value)*2}<br>`
        res.innerHTML += `Triplo = ${Number(n.value)*3}<br>`
        res.innerHTML += `Raíz quadrada = ${Number(n.value)**(1/2)}`
    } else {
        res.innerHTML = `Valor digitado: ${Number(n.value)}<br>` 
        res.innerHTML += `Dobro = ${Number(n.value)*2}<br>`
        res.innerHTML += `Triplo = ${Number(n.value)*3}<br>`
        res.innerHTML += `Raíz quadrada = Não existe`
    }
}