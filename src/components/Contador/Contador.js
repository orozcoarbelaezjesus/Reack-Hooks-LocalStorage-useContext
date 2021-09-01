import React from "react"
import { Contenedor } from "../Contenedor/Contenedor"
import { Button } from "../Button/Button"
import { Context } from "../Context/Context"

function Contador(){

    const {
        contador,
        setContador,
        setPersistenciaDatos
      } = React.useContext(Context);

    return (
        <Contenedor>
            <Button
                mensaje="Incrementar contador"
                operacion={() => {
                    let contador_actualizado = contador + 1
                    setContador(contador_actualizado)
                    setPersistenciaDatos(contador_actualizado)
                }}
            />
            <h2>{contador}</h2>
            <Button
                mensaje="Decrementar contador"
                operacion={() => {
                    let contador_actualizado = contador - 1
                    setContador(contador_actualizado)
                    setPersistenciaDatos(contador_actualizado)
                }}
            />
        </Contenedor>
    )
}

export { Contador }