// Desativando o link 

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
});

// Desativando a submissão do formulário

document.querySelector('input[type ="submit"]').addEventListener('click', (event) => {

    console.log(event);
    event.stopPropagation();
    event.preventDefault();
});

// Propagação antes do método stopPropagation

document.querySelector('.form').addEventListener('click', () => {
    console.log('cliquei na div');
});


