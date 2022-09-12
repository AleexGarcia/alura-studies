import React, { useState } from "react";
import Item from "./item";
import style from './lista.module.scss';
function Lista(){
   const [tarefas, setTarefas] = useState([
    {
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '02:00:00'
    }]);

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=>{
              setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]);
            }}>Estudos dos dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                    <Item
                        key = {index}
                        tarefa = {item.tarefa}
                        tempo = {item.tempo}
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