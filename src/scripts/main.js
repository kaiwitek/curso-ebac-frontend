document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mensagem').addEventListener('submit', function(e){
        e.preventDefault()
        let textoU = document.getElementById('texto').value 
        let sMensagem = document.getElementById('sMensagem')
        
        sMensagem.innerHTML = textoU
    })
})
