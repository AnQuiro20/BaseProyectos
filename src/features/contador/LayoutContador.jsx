import { useState } from 'react'
import { Contador1 } from './contador1/contador1'
import { Contador2 } from './contador2/contador2'
import { Agregarpersonas } from './agregarpersonas/agregarpersonas'
export function LayoutContador() {

    const [count, setCount] = useState(0)
    const [personas, setPersonas] = useState([])

    return (
        <>
            < Contador1 count = {count} setCount = {setCount}/>
            < Contador2 count = {count} setCount = {setCount}/>
            < Agregarpersonas setCount={setCount}
                personas={personas}
                setPersonas={setPersonas}/>
        </>
    )
}