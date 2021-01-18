function areaQuadrado(lado) {
   //console.log('Função Ativa');
   return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
   return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi);

// peso e altura são os parâmetros
function imc(peso, altura) {
   const imc = peso / (altura ** 2);
   return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos

function corFavorita(cor) {
   if (cor === 'azul') {
      return 'Eu gosto do céu';
   } else if (cor === 'verde'){
      return 'Eu gosto de mato';
   } else {
      return 'Eu não gosto de cores'
   }
}

function mostraConsole() {
   console.log('Oi!!');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
   const imc = peso / (altura ** 2);
   console.log(imc);
}

imc2(20, 1.80); // undefined

console.log(undefined);

function terceiraIdade(idade) {
   console.log(typeof idade);
   if(typeof idade !== 'number') {
      return 'Por favor preencha um número'
   } else if (idade >= 60) {
      return true;
   } else {
      return false;
   }
   console.log('testando');
}

console.log(terceiraIdade('oi'));

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
      return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(totalPaises);

var profissao = 'Designer';

function dados() {
   var nome = 'André';
   var idade = 32;
   function outrosDados() {
      var endereco = 'Bebedouro - São Paulo';
      var idade = 33;
      return `${nome}, ${idade}, ${endereco}, ${profissao}`;
   }
   return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

