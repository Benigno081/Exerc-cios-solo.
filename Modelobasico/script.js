function verificar(){
    var snt = document.getElementsByName('snt')  
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var pers = ''
    if(snt[0].checked){  
        pers = 'Tristeza'
        img.setAttribute('src', 'tristeza.png')
        document.body.style.background = 'linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244))'
        
    }  else if (snt[1].checked){
        pers = 'Alegria'
        img.setAttribute('src', 'alegria.png')
        document.body.style.background = 'linear-gradient(to right, rgb(202, 197, 49), rgb(243, 249, 167))'
    } else if (snt[2].checked){
        pers = 'Medo'
        img.setAttribute('src', 'medo.png')
        document.body.style.background = 'linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83))'
    } else if (snt[3].checked){
        pers = 'Nojinho'
        img.setAttribute('src', 'nojo.png')
        document.body.style.background = 'linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))'
    } else if(snt[4].checked){
        pers = 'Raiva'
        img.setAttribute('src', 'raiva.png')
        document.body.style.background = 'linear-gradient(to right, rgb(51, 51, 51), rgb(221, 24, 24))'
    
    } else if (snt[5].checked) {
        pers = 'Lobo, Pidão'
        img.setAttribute('src', 'lobo.png') 
        document.body.style.background = 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))'
    }
        
        
        
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que seu personagem é <strong>${pers}</strong>:`
    res.appendChild(img)
}