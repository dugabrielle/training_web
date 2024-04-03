// Alternar cores

let btn = document.querySelector('button');

function executar() {

    let box = document.querySelector('.box');

    if (box.style.backgroundColor === 'darkcyan') {
        box.style.backgroundColor = 'darkorchid';
    } else {
        box.style.backgroundColor = 'darkcyan';
    }
}

btn.addEventListener('click', executar);