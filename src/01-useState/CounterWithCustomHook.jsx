import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter,increment, decrement, reset } = useCounter()

    return (
        <>
            <h1>Counter con Hook: {counter}</h1>
            <hr />

            <button
                onClick={() => increment(4)}
                className='btn btn-success'>+1</button>
            <button
                onClick={reset}
                className='btn btn-danger'>Reset</button>
            <button
                onClick={() => decrement(2)}
                className='btn btn-info'>-1</button>

        </>
    )
}
