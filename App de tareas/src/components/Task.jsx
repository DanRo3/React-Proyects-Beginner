import React from "react";
import '../stylesheets/Task.css';
import BotonDelete from './BotonDelete';

const Task = ({id, texto, completada, completarTarea, eliminarTarea}) => (
    <li className={completada ? "tarea completada":"tarea"}>
        <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
            <p>{texto}</p>
        </div>
        <div onClick={()=> eliminarTarea(id)}>
            <BotonDelete />
        </div>
        
    </li>
);

export default Task;