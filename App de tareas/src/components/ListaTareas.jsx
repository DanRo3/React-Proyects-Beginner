import  React,{ useState } from 'react';
import EntradaTarea from './EntradaTarea';
import Task from './Task';
import '../stylesheets/ListaTareas.css';

function ListaTareas () {

    const[tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    const completarTarea = id =>{
        const tareaAct = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            };
            return tarea;
        });
        setTareas(tareaAct);
    };

    return(
        <div>
            <EntradaTarea  onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                    <Task 
                       key={tarea.id}
                       id={tarea.id}
                       texto={tarea.texto}
                       completada={tarea.completada}
                       eliminarTarea={eliminarTarea}
                       completarTarea={completarTarea}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default ListaTareas;

