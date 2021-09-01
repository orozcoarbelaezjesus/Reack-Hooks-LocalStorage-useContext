import React from "react"
import "./button.css"

function Button({ mensaje, operacion }) {
    return (
        <button className="button" onClick={operacion}>
            {mensaje}
        </button>
    )
}

export { Button }