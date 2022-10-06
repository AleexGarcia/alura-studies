import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './app.module.scss'
function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa | undefined>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriors => tarefasAnteriors.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      finalizarTarefa={finalizarTarefa}
      selecionado={selecionado} />
    </div>
  );
}

export default App;
