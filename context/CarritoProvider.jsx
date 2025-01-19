import { useReducer } from 'react'
import { CarritoContext } from '../context/CarritoContext'

const initialState = []

export const CarritoProvider = ({ children }) => {

    const comprasReduce = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[Carrito] Agregar':
                return [...state, action.payload]
            case '[Carrito] Aumentar':
                return state.map(item => {
                    const cant = item.cantidad +1
                    if(item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case '[Carrito] Disminuir':
                return state.map(item => {
                    const cant = item.cantidad -1
                    if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                })
            case '[Carrito] Eliminar':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }
    
    const [listaCompras, dispatch] = useReducer(comprasReduce, initialState)

    const agregar = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[Carrito] Agregar',
            payload: compra
        }
        dispatch(action)
    }
    const aumentar = (id) => {
        const action = {
            type: '[Carrito] Aumentar',
            payload: id
        }
        dispatch(action)
    }
    const disminuir = (id) => {
        const action = {
            type: '[Carrito] Disminuir',
            payload: id
        }
        dispatch(action)
    }
    const eliminar = (id) => {
        const action = {
            type: '[Carrito] Eliminar',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value ={{listaCompras, agregar, aumentar, disminuir, eliminar}}>
            {children}
        </CarritoContext.Provider>
    )
}
