function verificar(){
    let agora = new Date()
    let ano = agora.getFullYear()
    let txnas = window.document.querySelector('input#txtano')
    let res = window.document.querySelector('div#res')

    if (txnas.value.length == 0 || txnas.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(txnas.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade < 10) {
                img.setAttribute('src', 'homem-bebe(correto).png')
            
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem(correto).png')

            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto(correto).png')

            } else {
                img.setAttribute('src', 'homem-idoso(correto).png')
            }

        }
        if (fsex[1].checked) {
            genero = 'Mulher'

        if (idade < 10) {
            img.setAttribute('src', 'mulher-bebe(correto).png')

            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem(correto).png')

            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta(correto).png')

            } else {
                img.setAttribute('src', 'mulher-idosa(correto).png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Recebemos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}