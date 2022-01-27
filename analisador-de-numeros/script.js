let num = window.document.querySelector('input#txtn')
let lista = window.document.querySelector('select#sellist')
let res = window.document.querySelector('div#res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add(){
    if(isnumero(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('[ERRO] Valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if(valores.length == 0) {
        window.alert('[ERRO] Insira valores para finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
             if (valores[pos] < menor)
                 menor = valores[pos]   
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} valores</p>`
        res.innerHTML += `<p>O MAIOR número é: ${maior}</p>`
        res.innerHTML += `<p>O MENOR número é: ${menor}</p>`
        res.innerHTML += `<p>A SOMA de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A MÉDIA dos valores é: ${media.toFixed(3)}</p>`
    }
}