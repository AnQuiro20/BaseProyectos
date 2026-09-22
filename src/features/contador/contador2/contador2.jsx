import useContador from "../hooks/useContador";
import { CONTADOR_TEXT } from "../constants/contador.constants";

export function Contador2({count, setCount}) {
    const [ handleIncrementar] = useContador(setCount)
    return (
        <>
            <h2>Contador 2</h2>
            <p>{count}</p>
            <button onClick={count < 5 ? handleIncrementar : null}>{CONTADOR_TEXT.INCREMENT}</button>
        </>
    )
}