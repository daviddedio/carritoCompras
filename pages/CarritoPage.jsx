import { useContext } from "react"
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

    const { listaCompras, agregar, aumentar, disminuir, eliminar } = useContext(CarritoContext)

    const CalcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const imprimir = () => {
        print()
    }

    return (
        <>

            <h3>Pedidos realizados</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Moneda</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-outlier-primary"
                                        onClick={() => disminuir(item.id)}>-</button>
                                    <button className="btn btn-primary btn-outlier">{item.cantidad}</button>
                                    <button className="btn btn-outlier-primary"
                                        onClick={() => aumentar(item.id)}>+</button>
                                </td>
                                <td>U$D</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => eliminar(item.id)}>✖</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grip gap-2">
                <h3>Total: {CalcularTotal()} U$D</h3>
            </div>
            <div className="d-grip gap-2">
                <button className="btn btn-primary w-100"
                    disabled={listaCompras < 1}
                    onClick={imprimir}>COMPRAR</button>
            </div>

        </>
    )
}
