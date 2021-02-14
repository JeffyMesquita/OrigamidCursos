var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);
console.log(numero2);

var idade = 20;

var podeBeber = 20;
var naoPossuiDiabetes = false;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false;

console.log(podeBeber);

var possuiFaculdade = true;
if(possuiFaculdade)
      console.log('Sim, possui');
      console.log('Isso mesmo');
else
      console.log('Não possui');