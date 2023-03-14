import React, { useState } from 'react'
import { Small } from '../components/Small'
import { useCounter } from '../hooks/useCounter'

export const Memorize = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
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

