import { Card } from '../components/Card'
import { useContext } from "react"
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext} from '../context/CarritoContext'

export const ComprasPage = () => {
    
    const {productos} = useContext(ProductosContext)
    const { listaCompras, agregar, aumentar, disminuir, eliminar } = useContext(CarritoContext)

    const hAgregar = (compra)=>{
        console.log(compra)
        agregar(compra)
    }
    const hEliminar = (id)=>{
        eliminar(id)
    }
    const hAumentar = (id)=>{

    }
    const hDisminuir = (id)=>{

    }

    return (
        <>
            <h1>Listado de articulos</h1>
            <hr />
            {
                productos.map(producto =>(
                    <Card key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    id={producto.id}
                    rate={producto.rating.rate}
                    categoria={producto.category}
                    hAgregar={()=>hAgregar(producto)}
                    hEliminar={()=>hEliminar(producto.id)}
                    ></Card>
                ))
            }
        </>
    )
}
