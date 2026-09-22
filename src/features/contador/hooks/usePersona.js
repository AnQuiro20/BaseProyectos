function usePersona(setCount, setPersonas) {

    function handleAgregar(nombre, edad) {
        if (nombre.trim() === "" || edad === "") {
            return false
        }
        const nuevaPersona = {
            id: crypto.randomUUID(),
            nombre: nombre.trim(),
            edad: Number(edad)
        }
        setPersonas(prev => [
            ...prev,
            nuevaPersona
        ])
        setCount(prev => prev + 1)
        return true
    }
    return [
        handleAgregar
    ]
}
export default usePersona;