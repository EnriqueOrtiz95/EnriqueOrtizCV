let menuBtn = document.querySelector('#menu-btn');
let navRight = document.querySelector('.nav__right');
let nav = document.querySelector('.nav');
let navLogo = document.querySelector('.nav__logo')
let acerca = document.querySelector('.acerca');
let header = document.querySelector('.header');
let footer = document.querySelector('.contactame');

menuBtn.addEventListener('click', function() {
    navLogo.classList.toggle('white');
    nav.classList.toggle('black');
    this.classList.toggle('fa-xmark');
    navRight.classList.toggle('active');
})

function adding(){
    nav.classList.add('bgBlack');
    document.querySelector('.nav__logo').classList.add('text-white');
    const tags = document.querySelectorAll('.nav__right > a');
    tags.forEach(tag => tag.classList.add('text-white'));
    menuBtn.classList.add('text-white');
}
function removing(){
    nav.classList.remove('bgBlack');
    document.querySelector('.nav__logo').classList.remove('text-white');
    const tags = document.querySelectorAll('.nav__right > a');
    tags.forEach(tag => tag.classList.remove('text-white'));
    menuBtn.classList.remove('text-white');
}

const blackBG = function(entries) {
    console.log(entries);
    const [entry] = entries;
    // console.log(entry);
    console.log(entry.target)
    if(!entry.isIntersecting){
        adding();
    }else{
        removing();
    }
}
whiteBG = function(entries){
    const[entry] = entries;
    if(!entry.isIntersecting){
        adding();
    }else{
        removing();
    }
}

const headerObserver = new IntersectionObserver(blackBG, {root: null, threshold: 0.2});
headerObserver.observe(header);
const footerObserver = new IntersectionObserver(whiteBG, {root: null, threshold: 0.2});
footerObserver.observe(footer);

//? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SCROLLREVEAL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
window.sr = ScrollReveal();

    sr.reveal('.scroll-banner', {
        duration: 2500,
        origin: 'bottom',
        distance: '150px',
        delay: 400
    });
    sr.reveal('.scroll-acerca', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        delay: 300
    });
    sr.reveal('.scroll-honor', {
        duration: 2000,
        origin: 'left',
        distance: '100px'
    });
    sr.reveal('.scroll-proyecto', {
        duration: 2000,
        origin: 'left',
        distance: '200px',
        delay: 500
    });
    sr.reveal('.scroll-tecnicas', {
        duration: 1000,
        origin: 'left',
        distance: '30px',
        delay: 200
    });
    sr.reveal('.scroll-blandas', {
        duration: 1000,
        origin: 'left',
        distance: '30px',
        delay: 200
    });
    sr.reveal('.scroll-educacion', {
        duration: 1500,
        origin: 'left',
        distance: '150px',
        delay: 400
    });
    sr.reveal('.scroll-educacionm', {
        duration: 1500,
        origin: 'left',
        distance: '150px',
        delay: 400
    });