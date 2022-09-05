import React from "react";
import style from './lista.module.scss';
function Lista(){
    const tarefas = [
    {
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '02:00:00'
    }]

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos dos dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
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