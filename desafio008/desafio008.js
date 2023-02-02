function enter() {
    let n = document.getElementById('inum')
    let res = document.getElementById('resultado')
    if (n.value.length == 0) {
        alert('ERRO! Digite um valor!')
    } else if (n.value < 0) {
        alert('ERRO! Digite apenas valores maior que zero(0)!')
    } else {
        res.innerHTML = `${Number(n.value)} metros(m) em: <br>
        Milímetro(mm): ${Number(n.value) * 1000}mm <br>
        Centímetro(cm): ${Number(n.value) *100}cm <br>
        Decímetro(dm): ${Number(n.value * 10)}dm <br>
        Decâmetro(dam): ${Number(n.value) / 10}dam <br>
        Hectômetro(hm): ${Number(n.value) /100}hm <br>
        Quilômetro(km) : ${Number(n.value / 1000)}km`
    }
}

