import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { ComprasPage } from '../pages/ComprasPage'
import { CarritoPage } from '../pages/CarritoPage'

export const CarritoApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-1">
                <Routes>
                    <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                    <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                    <Route path="/*" element={<Navigate to="/" />}></Route>
                </Routes>
            </div>
        </>
    )
}

