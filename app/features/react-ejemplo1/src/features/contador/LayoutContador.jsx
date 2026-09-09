import { useState } from 'react'
import {  CONTADOR_TEXT } from './constants/contador.constants'
export function LayoutContador() {
    const [count, setCount] = useState(0)

    function handleIncrementar() {
        setCount(prev => prev + 1)
    }

    function handleDecrementar() {
        setCount(prev => prev - 1)
    }

    return (
        <>
            <h2>Contador</h2>
            <p>Valor actual: {count}</p>
            <button onClick={count < 5 && handleIncrementar}>{CONTADOR_TEXT.INCREMENT}</button>
            <button onClick={count > 0 ? handleDecrementar : null}>{CONTADOR_TEXT.DECREMENT}</button>

        </>
    )
}