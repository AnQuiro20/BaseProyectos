import { useState } from "react"
import usePersona from "../hooks/usePersona"

export function Agregarpersonas({ setCount, personas, setPersonas }) {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    const [handleAgregar] = usePersona(setCount, setPersonas)

    function agregarPersona() {

        const personaAgregada = handleAgregar(nombre, edad)

        if (personaAgregada) {
            setNombre("")
            setEdad("")
        }
    }

    return (
        <>
            <h2>Agregar persona</h2>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />

            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(event) => setEdad(event.target.value)}
            />

            <button onClick={agregarPersona}>
                Agregar
            </button>

            <h2>Personas registradas</h2>

            <ul>
                {personas.map((persona) => (
                    <li key={persona.id}>
                        {persona.nombre} - {persona.edad} años
                    </li>
                ))}
            </ul>
        </>
    )
}