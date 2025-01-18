import { useState } from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const Card = ({ imagen, titulo, descripcion, precio, id, rate, categoria, hAgregar, hEliminar}) => {

    const [added, setAdded] = useState('')

    const agregar = ()=>{
        hAgregar()
        setAdded(true)
    }    
    const quitar = ()=>{
        hEliminar()
        setAdded(false)
    }

    return (
        <div className="tarjeta" id={id}>
            <div>
                <img
                    src={imagen}
                    className="tarjeta-imagen"
                    alt={titulo}
                />
                <Stack spacing={1}>
                    <Rating name="read-only" defaultValue={rate} precision={0.5} readOnly />
                </Stack>
                <p>{categoria}</p>
            </div>
            <div className="tarjeta-contenido px-3">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio} U$D</p>
                {added
                    ? <button type="button" className="boton-quitar d-inline" onClick={quitar}>quitar</button>
                    : <button type="button" className="boton-agregar d-inline" onClick={agregar}>agrega</button>
                }
            </div>
        </div>
    )
}

