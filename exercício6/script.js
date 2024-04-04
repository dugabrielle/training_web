// Alternar cores

let btn = document.querySelector('button');

function executar() {

    let box = document.querySelector('.box');

    if (box.classList.contains ('cor-1')) {
        box.classList.remove('cor-1');
        
    } else {
 
        box.classList.add('cor-1');
    } 
}

btn.addEventListener('click', executar);