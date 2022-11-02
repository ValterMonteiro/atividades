import './nav.js'
import '../css/lista-tarefas.css'

/* Adionar tarefas */
const adicionarTarefa = (evento) => {

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

    //excluindo tarefa
    tarefa.appendChild(excluirTarefa());
}

const novaTarefa = document.querySelector('#btn-adicionar');

//escutando o click para adicionar tarefa
novaTarefa.addEventListener('click', adicionarTarefa)

/* Excluir tarefa */

const excluirTarefa = () => {

    //criando elemetno
    const botaoExcluir = document.createElement('btn-excluir');
    
    botaoExcluir.innerText = 'Excluir';

    // adicionar um atributo ao elemento
    botaoExcluir.setAttribute('className', 'Excluir');

    //adicionando evento
    botaoExcluir.addEventListener('click', (evento)=>{        

            const botaoDeleta = evento.target;
            
            const tarefaExcluir = botaoDeleta.parentElement;
        
            tarefaExcluir.remove();
        
            return botaoDeleta;
    });

    return botaoExcluir;
   
}

/* const deletarTarefa = (evento)=>{

    const botaoDeleta = evento.target;
    
    const tarefaExcluir = botaoDeleta.parentElement;

    tarefaExcluir.remove();

    return botaoDeleta;    

} */