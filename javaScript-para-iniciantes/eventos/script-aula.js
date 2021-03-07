const img = document.querySelector('img');

function callback(event) {
   console.log(event);
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbacklista(event) {
   console.log(event.currentTarget);
}

// animaisLista.addEventListener('click', callbacklista)

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
   event.preventDefault();
   //console.log('Clicou');
   console.log(this.getAttribute('href'))
   console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
   console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
   if(event.key === 'f') {
      document.body.classList.toggle('azul');
   }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
   console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
   img.addEventListener('click', handleImg);
});