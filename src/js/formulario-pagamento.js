import './nav.js'
import '../css/formulario-pagamento.css'


const pegarInformacao =() =>{
    
    
}

/* numero do cartão */
const inputNumero = document.querySelector('.input-numero');
const inputNome = document.querySelector('.input-nome');
const inputData = document.querySelector('.input-data');
const inputCCV = document.querySelector('.input-CodSeguranca');

const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const cardData = document.getElementById('expiration');
const cardCCV = document.getElementById('ccv-blok');

inputNumero.addEventListener('input', pegarNumero);
inputNome.addEventListener('input', pegarNome);
inputData.addEventListener('input', pegarData);
inputCCV.addEventListener('input', pegarCCV);

function pegarNumero(e) {
  cardNumber.textContent = e.target.value;
}

function pegarNome(e) {
    cardHolder.textContent = e.target.value;
  }

function pegarData(e) {
  cardData.textContent = e.target.value;
}

function pegarCCV(e) {
  cardCCV.textContent = e.target.value;
}