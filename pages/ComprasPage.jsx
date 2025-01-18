import {Card} from '../components/Card'
import { useEffect, useState } from "react"

export const ComprasPage = () => {
    
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetchProductos()
    }, [])

    const fetchProductos = async()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    return (
        <>
        <h1>Listado de articulos</h1>
        <hr />
        {
            productos.map(producto =>(
                <Card
                imagen={producto.image}
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                id={producto.id}
                rate={producto.rating.rate}
                categoria={producto.category}
                ></Card>
            ))
        }
        </>
    )
}
