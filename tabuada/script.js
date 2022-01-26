function gerar(){
    let n = window.document.querySelector('input#txtn')
    let tab = window.document.querySelector('select#seltab')

    if (n.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número')

    } else {
        tab.innerHTML = ''
        let num = Number(n.value)
        for (let c = 0; c <= 10; c++){
            let item = window.document.createElement('option')
            item.innerHTML = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
