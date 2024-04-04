document.formulario.addEventListener('submit', (event) => {

    let usuario = event.target.usuario.value;
    let senha = event.target.senha.value;
    let submit = true;

    if(usuario === ""){
        submit = false;

        let erro = document.querySelector('input[name="usuario"]');
        erro.insertAdjacentHTML('afterend', '<span class="erro">Usuário obrigatório!</span');

    }

    if(senha === ""){
        submit = false;

        let erro = document.querySelector('input[name="senha"]');
        erro.insertAdjacentHTML('afterend', '<span class="erro">Senha obrigatória!</span');

    }


    if(!submit){
        event.preventDefault();

        setTimeout(() => {
            document.querySelectorAll(".erro").forEach(e => e.remove())
        }, 4000);
    }
})
