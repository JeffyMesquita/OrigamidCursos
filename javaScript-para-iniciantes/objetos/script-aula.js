var pessoa = {
   nome: 'Jeferson',
   idade: 32,
}

console.log(pessoa.idade);

var quadrado  = {
   lados: 4,
   area: function(lado){
      return lado * lado;
   },
   perimetro: function(lado){
      return this.lados * lado;
   }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

// var height = 120;
var menu = {
   width: 800,
   height: 50,
   backgroundColor:'#84e',
   metadeHeight(){
      return this.height / 2;
   }
}

menu.backgroundColor = '000';
menu.color = 'blue';

menu.esconder = function() {
   console.log('Escondi');
}

var bg = menu.backgroundColor;