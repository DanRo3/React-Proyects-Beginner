import './App.css';
import ListaTareas from './components/ListaTareas';
import Logo from './components/Logo';


function App() {
  return (
    <div className="To-do-List">
      <Logo 
      titulo='To do list'
      subtitulo='Created by DanRo'/>
      <div className='contenedor-tareas'>
        <h2>My task's</h2>
        <ListaTareas />
      </div>
    </div> 
  );
}

export default App;
