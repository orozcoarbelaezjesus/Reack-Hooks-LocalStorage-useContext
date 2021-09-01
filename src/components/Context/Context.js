import React from "react"

const Context = React.createContext()

function Provider({ children }) {

    const persistenciaDatos = localStorage.getItem('VALOR_CONTADOR')
    let valorContador = 0
    
    if (!persistenciaDatos) {
        localStorage.setItem('VALOR_CONTADOR', JSON.stringify(0))
        valorContador = 0
    } else {
        valorContador = JSON.parse(persistenciaDatos)
    }

    const [contador, setContador] = React.useState(valorContador)

    const setPersistenciaDatos = (contador_actualizado) => {
        localStorage.setItem('VALOR_CONTADOR', JSON.stringify(contador_actualizado))
    }

    return (
        <Context.Provider value={{
            contador,
            setContador,
            setPersistenciaDatos
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }