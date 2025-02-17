import { ProductosContext } from "./ProductosContext"
import { useEffect, useState } from "react"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos()
    }, [])

    async function fetchProductos() {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProductos(data)
    }

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}
