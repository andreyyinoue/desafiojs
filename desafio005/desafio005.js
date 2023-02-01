function enter() {
    let n = document.getElementById('inum')
    var res = document.getElementById('resultado')
    if (n.value.length == 0) {
        alert('Ação inválida. Digite umm número.')
    } else {
        res.innerHTML = `Valor digitado: ${Number(n.value)}. <br> Antecessor: ${Number(n.value) - 1} <br> Sucessor: ${Number(n.value) + 1}`
    }
}