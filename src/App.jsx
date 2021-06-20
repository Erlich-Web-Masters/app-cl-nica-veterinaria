import React,{useState} from 'react'
import './App.css'
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = cita => {
    setCitas([...citas, cita]);
  }

  const eliminarCita = id => {
   const nuevasCitas = citas.filter( cita => cita.id !== id);
   setCitas(nuevasCitas);
  }

  return (
   <>
   <h1>Administrador de pacientes</h1>
   <div className="container">
     <div className="row">
       <div className="one-half column">
         <Formulario crearCita={crearCita}/>
       </div>
       <div className="one-half column">
        <h2>Administra tus citas</h2> 
         {citas.map( cita => <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>) }
       </div>
     </div>
   </div>
   </>
  )
}

export default App
