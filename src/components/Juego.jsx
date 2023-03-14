import React from 'react'

export const Juego = ({juego}) => {

    const {name, description, released_date} = juego;

    return (
        <div className="card mb-3 p-5">
            <p>{name}</p>
            <p>{description}</p>
            <p>{released_date}</p>
        </div>
    )
}
