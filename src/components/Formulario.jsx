import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function Formulario({crearCita}) {

    const [cita, setCita] = useState({
        mascota:'',
        propeteario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error,setError] = useState(false);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: [e.target.value]
        });
    };

    const {mascota,propeteario,fecha,hora,sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        //Validacion
        if( mascota === '' || propeteario === '' || fecha === '' || hora === '' || sintomas === ''){
            setError(true);
            return;
        }

        setError(false);
        //Asignar un Id
        cita.id = Math.random();
        //Crear la cita
        crearCita(cita);
        //reiniciar el form
        setCita({
        mascota:'',
        propeteario: '',
        fecha: '',
        hora: '',
        sintomas: ''})
    }

    return (
        <>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form onSubmit={ submitCita}>
            <label htmlFor="mascota">Nombre Mascota</label>
            <input 
                type="text" 
                className="u-full-width" 
                placeholder="Nombre Mascota" 
                name="mascota" 
                id="mascota"
                onChange={handleChange}
                value={mascota}
            />
            
            <label htmlFor="propeteario">Nombre Dueño</label>
            <input 
                type="text" 
                className="u-full-width" 
                placeholder="Nombre dueño de la mascota" 
                name="propeteario" 
                id="propeteario"
                onChange={handleChange}
                value={propeteario}
                />

            <label htmlFor="fecha">Fecha</label>
            <input 
                type="date" 
                className="u-full-width"  
                name="fecha" 
                id="fecha"
                onChange={handleChange}
                value={fecha}
                />

            <label htmlFor="hora">Hora</label>
            <input 
                type="time" 
                className="u-full-width"  
                name="hora" 
                id="hora"
                onChange={handleChange}
                value={hora}
                />

            <label htmlFor="sintomas">Síntomas</label>
            <textarea 
                name="sintomas" 
                className="u-full-width" 
                id="sintomas" onChange={handleChange}
                value={sintomas}
            /> 

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}