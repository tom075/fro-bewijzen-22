const knop = document.getElementById('knop');
let vlak = document.querySelector('.vlakje');
let vlak2 = document.querySelector('.vlakje2');


const schuif = () => {
    vlak.classList.toggle('vlakje--schuif-uit')
    vlak2.classList.toggle('vlakje--schuif-uit')

}

knop.addEventListener('click', schuif);