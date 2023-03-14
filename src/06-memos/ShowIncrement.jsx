import React, { memo } from 'react'


export const ShowIncrement = memo(({ increment }) => {

    // const {increment} = useCounter()
    console.log('Me volví a generar');

    return (
        <button
            className="btn btn-primary"
            onClick={() => increment()}

        >Incrementar</button>
    )
})
