import React from "react"
import "./contenedor.css"

function Contenedor({ children }) {
    return (
        <section className="contenedor-contador">
            {children}
        </section>
    )
}

export { Contenedor }