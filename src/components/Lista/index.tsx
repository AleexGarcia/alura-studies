import React from "react";
import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from './lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos dos dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
                {/* <li>
                    <h3>React</h3>
                    <span>02:00:00</span>
                </li>
                <li>
                    <h3>Javascript</h3>
                    <span>01:00:00</span>
                </li> */}
            </ul>
        </aside>
    )
}

export default Lista;