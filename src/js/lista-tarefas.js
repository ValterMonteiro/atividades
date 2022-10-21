import './nav.js'
import '../css/lista-tarefas.css'

const adicionarTarefa = (evento)=>{

    evento.preventDefault();

    //selecionando os elementos
    const listaTarefa = document.querySelector('#lista-tarefas');
    const btnAdicionar = document.querySelector('#input-nova-tarefa');
    const valor = btnAdicionar.value;

    //percorrendo o dom e criando lista
    const tarefa = document.createElement('li');

    //atribuindo o style
    tarefa.classList.add('tarefa');

    //capturando o valor digitado
    //const conteudo = `<div>${valor}</div>`;

    //acessando e colocando a nova tarefa no app
    tarefa.innerHTML = `
    <div>${valor}</div>
    <button class="btn-excluir">Excluir</button>
    `

    //atribuindo a tarefa a lista
    listaTarefa.appendChild(tarefa);
}

const novaTarefa = document.querySelector('#btn-adicionar');

//escutando o click para adicionar tarefa
novaTarefa.addEventListener('click', adicionarTarefa)