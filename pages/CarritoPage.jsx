import { useContext } from "react"
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

    const { listaCompras, agregar, aumentar, disminuir, eliminar } = useContext(CarritoContext)
    return (
        <>

            <h3>Pedidos realizados</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>1</td>
                                <td>
                                    <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={()=>eliminar(item.id)}>🧺</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grip gap-2">
                <button className="btn btn-primary w-100">COMPRAR</button>
            </div>

        </>
    )
}
