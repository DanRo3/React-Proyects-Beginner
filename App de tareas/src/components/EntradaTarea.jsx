import React,{useState} from "react";
import '../stylesheets/EntradaTarea.css';
import { v4 as uuidv4 } from 'uuid';

function EntradaTarea(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva = {
            id:uuidv4(),
            texto:input,
            completada:false
        }
        props.onSubmit(tareaNueva);
    }

    return(
        <form 
            className="Escribir" 
            onSubmit={manejarEnvio}
        >
            <input 
            type="text" 
            id="entrada-tarea" 
            className="entrada-tarea" 
            placeholder="Write your task" 
            onChange={manejarCambio}
        />
            <button 
                className="boton-et">
                Add
            </button>
        </form>
    );

    
}

export default EntradaTarea;