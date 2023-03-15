import React, { useReducer } from 'react'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TOdoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    

    return (
        <>
            <h1>TodoApp</h1>
            <hr/>
            <ul>
                <li>Crear TODO</li>
            </ul>
        </>
    )
}
