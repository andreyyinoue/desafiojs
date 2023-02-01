function enter(){
    let nome = document.getElementById('inome')
    if (nome.value.length == 0) {
        window.alert('Campo vazio. Digite seu nome.')
    } else {
        window.alert(`Seja vindo vindo(a), ${nome.value}`)
    }
}
    
