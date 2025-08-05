const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;
const raiz = numero ** 0.5;
const numeroInteiro = Number.isInteger(numero);
const numeroValido =  Number.isNaN(numero);
const arrendodarBaixo = Math.floor(numero);
const arredondarCima = Math.ceil(numero);
const casaDecimal = numero.toFixed(2);

texto.innerHTML = `
<p> Resultado da raiz: ${raiz}</p>
<p> Resultado do Numero inteiro: ${numeroInteiro}</p>
<p> Resultado do Numero válido: ${numeroValido}</p>
<p> Resultado do Numero Arredondado para Baixo: ${arrendodarBaixo}</p>
<p> Resultado do Numero Arredondado para Cima: ${arredondarCima}</p>
<p> Resultado do Numero em Casa Decimal: ${casaDecimal}</p>`

