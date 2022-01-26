//Este é a programação de um site que tem o intuito realizar contagens levando em consideração o passo que o usuário desejar. Ele realiza contagens tanto crescentes como decrescente.
function contar() {
    let s = window.document.querySelector('input#start')
    let f = window.document.querySelector('input#finish')
    let p = window.document.querySelector('input#step')
    let res = window.document.querySelector('p#res')

    if (s.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
        res.innerHTML = '[ERRO]'

    } else {
        res.innerHTML = 'Contando: <br>'
        let comeco = Number(s.value)
        let final = Number(f.value)
        let passo = Number(p.value)
        
        if (passo <= 0){
            window.alert('Passo Inválido. Considerando Passo 1')
            passo = 1
        }
        
        //Contagem Crescente
        if (final > comeco){
            for (let c = comeco; c <= final; c += passo){ 
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
            //Contagem Decrescente
        } if (comeco >= final){
            for (let c = comeco; c >= final; c -= passo){
                    res.innerHTML += `${c} \u{1F449}`
            }
                res.innerHTML += `\u{1F3C1}`
        }
    }
}