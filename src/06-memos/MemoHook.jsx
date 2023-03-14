import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber = 4000) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...')
    }
    return `
    ${iterationNumber} iteraciones realizadas a las ${new Date().getHours()} horas, ${new Date().getMinutes()} minutos y ${new Date().getSeconds()} segundos`
}


export const MemoHook = () => {

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true)
    const momorizeValue = useMemo(() => heavyStuff(counter), [counter])   // <--- this is the hook
    // useMemo(() => heavyStuff(counter), [counter])   // <--- this is the hook

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <p>{heavyStuff(counter)}</p>
            <button
                className="btn btn-primary"
                onClick={() =>increment(1)}
            >+1</button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() =>setShow(!show)}
            >
            show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}

