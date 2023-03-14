import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Me volví a dibujar :D');
    return (
        <small>{value}</small>
    )
})
