'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark_theme');

    if (document.body.classList.contains('dark_theme')) {
        this.textContent = "Branco";
    }
    else {
        this.textContent = "Preto";
    }

    console.log('current class name: ' + document.body.className);
});