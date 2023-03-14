import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        // console.log('Componente montado')
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y }
            // console.log(coords)
            setCoords(coords)
        }

        window.addEventListener('mousemove', onMouseMove)
        
        return () => {
            // console.log('Componente desmontado')
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>El usuario ya existe</h3>
            {
                coords && <p>{JSON.stringify(coords)}</p>
            }
        </>
    )
}
