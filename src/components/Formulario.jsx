import React,{useState} from 'react'

export default function Formulario() {

    const [cita, setCita] = useState({
        mascota:'',
        propeteario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: [e.target.value]
        });
    };

    const {mascota,propeteario,fecha,hora,sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();
        console.log("Enviando");

        //Validacion
        //Asignar un Id
        //Crear la cita
        //reiniciar el form
    }

    return (
        <>
            <h2>Crear Sitas</h2>
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
