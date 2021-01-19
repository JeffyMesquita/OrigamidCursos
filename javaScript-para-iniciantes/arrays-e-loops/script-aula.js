/*var videoGames = ['Switch', 'PS4', 'XBOX'];

var ultimoItem = videoGames.pop(); */

for (var numero = 0; numero < 10; numero++) {
      console.log(numero);
};

var i = 0;
while (i < 10) {
      console.log(i);
      i++;
}// Retorna de 0 a 9 no console

var videoGames = [ 'Switch', 'PS4', 'XBox', '3DS'];

for  (var item = 0; item < videoGames.length; item++) {
      console.log(videoGames[item]);
      if (videoGames[item] === 'PS4') {
            break;
      }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function (fruta, index)  {
      frutas.pop();
      console.log(fruta, index, frutas);
});

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
      console.log(numero);   
      numero++;
}


