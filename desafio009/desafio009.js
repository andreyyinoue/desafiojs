function tab() {
    let n = document.getElementById('inum')
    let res = document.getElementById('resultado')
    let c = 1
    res.innerHTML = " "
    if (n.value.length == 0) {
        alert('ERRO! Digite um número!')
    } else {
    while (c <= 10) {
        res.innerHTML += `${Number(n.value)} x ${c}= ${Number(n.value) * c} <br>`
        c += 1
    }
    }
} 