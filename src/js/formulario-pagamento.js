import './nav.js'
import '../css/formulario-pagamento.css'


/* numero do cartão */
const inputNumero = document.querySelector('.input-numero');
const inputNome = document.querySelector('.input-nome');
const inputAno = document.querySelector('.input-ano');
const inputMes = document.querySelector('.input-mes');
const inputCCV = document.querySelector('.input-CodSeguranca');

const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const cardMes = document.getElementById('expiration-mes');
const cardAno = document.getElementById('expiration-ano');
const cardCCV = document.getElementById('ccv-blok');

inputNumero.addEventListener('input', pegarNumero);
inputNome.addEventListener('input', pegarNome);
inputAno.addEventListener('input', pegarAno);
inputMes.addEventListener('input', pegarMes);
inputCCV.addEventListener('input', pegarCCV);

function pegarNumero(e) {
  cardNumber.textContent = e.target.value;
}

function pegarNome(e) {
  cardHolder.textContent = e.target.value;
}

function pegarAno(e) {
  cardAno.textContent = e.target.value;
}

function pegarMes(e){
  cardMes.textContent = e.target.value;
}

function pegarCCV(e) {
  cardCCV.textContent = e.target.value;
}

document.querySelector('.input-CodSeguranca').onmouseenter = () => {
  document.querySelector('.credit-card-front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.credit-card-back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.input-CodSeguranca').onmouseleave = () => {
  document.querySelector('.credit-card-front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.credit-card-back').style.transform = 'perspective(1000px) rotateY(-180deg)';
}