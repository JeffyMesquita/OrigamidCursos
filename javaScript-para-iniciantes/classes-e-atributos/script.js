const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
   menu.classList.add('possui-azul');
} else {
   menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho'; 

console.log(menu.className);

//console.log(menu.classList.add)

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));