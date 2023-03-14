import React, { useLayoutEffect, useRef, useState } from 'react'


export const Juego = ({juego}) => {

    const {name, description, released_date} = juego;

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({width: 0,height: 0})

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [juego])

    return (
        <div ref={pRef} className="card mb-3 p-5">
            <p>{name}</p>
            <p>{description}</p>
            <p>{released_date}</p>

            <code>{JSON.stringify(boxSize)}</code>
        </div>
    )
}
