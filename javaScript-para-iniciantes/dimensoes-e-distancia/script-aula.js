const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const h2rect = primeiroH2.getBoundingClientRect();

console.log(h2rect);

if(h2rect.top < 0) {
   console.log('Passou o Elemento')
}  

console.log(
   window.innerWidth,
   window.innerHeight,
   window.outerWidth,
   window.outerHeight,
   window.psgYoffset,
);

const small = window.matchMedia(('(max-width: 600px)')).matches;

if(small) {
   console.log('Úsuário Mobile');
} else {
   console.log('Úsuário Desktop');
}