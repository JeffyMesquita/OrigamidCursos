const animais = document.getElementById('animais');
console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[1]);

const primeilaLi = document.querySelector('li');
console.log(primeilaLi)

const primeilaUl = document.querySelector('ul');
console.log(primeilaUl)

const linkInterno = document.querySelector('[href^="#"]');console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelector('.grid-section');

primeilaUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index) {
   console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
   console.log(item);
});