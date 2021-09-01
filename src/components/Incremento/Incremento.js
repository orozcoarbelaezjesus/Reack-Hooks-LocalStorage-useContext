import React from "react"

function Incremento ({ contador, modificarContador }){
    contador++;
    modificarContador(contador)
}

export { Incremento }