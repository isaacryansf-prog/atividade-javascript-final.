/*
    Atividade: Painel de Tarefas Escolares

    Escreva aqui o código JavaScript para programar os recursos da página.
*/


const contadorTarefas = document.querySelector("#contador-tarefas");
const tarefas = document.querySelectorAll(".tarefa");
const botaoMotivacao = document.querySelector("#botao-motivacao");
const mensagemMotivacional = document.querySelector("#mensagem-motivacional");

const frases = [
  "Com grandes poderes, vem grandes responsabilidades.",
  "Vem pro Senac Penha!",
  "Multimídia é top!",
  "Esse site tá melhor que o sala do futuro",
  "Uma tarefa de cada vez, sem usar script hein!",
  "A melhor matéria é Educação Física!"
];

botaoMotivacao.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * frases.length);
  mensagemMotivacional.textContent = frases[indice];
});


function atualizarContador() {
  let concluidas = 0;

  tarefas.forEach(function (tarefa) {
    if (tarefa.classList.contains("tarefa-concluida")) {
      concluidas++;
    }
  });

  contadorTarefas.textContent = concluidas;
}


tarefas.forEach(function (tarefa) {
  const indicador = tarefa.querySelector(".indicador-estado");
  const botao = tarefa.querySelector(".botao-avancar");

  botao.addEventListener("click", function () {
    if (tarefa.classList.contains("tarefa-pendente")) {
      tarefa.classList.remove("tarefa-pendente");
      tarefa.classList.add("tarefa-andamento");

      indicador.classList.remove("estado-pendente");
      indicador.classList.add("estado-andamento");

      indicador.textContent = "Em andamento";
      botao.textContent = "Concluir tarefa";

    } else if (tarefa.classList.contains("tarefa-andamento")) {
      tarefa.classList.remove("tarefa-andamento");
      tarefa.classList.add("tarefa-concluida");

      indicador.classList.remove("estado-andamento");
      indicador.classList.add("estado-concluida");

      indicador.textContent = "Concluída";
      botao.textContent = "Recomeçar tarefa";

    } else if (tarefa.classList.contains("tarefa-concluida")) {
      tarefa.classList.remove("tarefa-concluida");
      tarefa.classList.add("tarefa-pendente");

      indicador.classList.remove("estado-concluida");
      indicador.classList.add("estado-pendente");

      indicador.textContent = "Pendente";
      botao.textContent = "Iniciar tarefa";
    }

    atualizarContador();
  });
});

atualizarContador();


