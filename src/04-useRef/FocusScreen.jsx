import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    
    const handleClick = () => {
        // document.querySelector('input').select()
        // console.log(inputRef);
        console.log(inputRef);
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <label htmlFor='nombre'>nombre</label>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
                type='text'
            />
            <label htmlFor='email'>email</label>
            <input
                
                className="form-control"
                placeholder="email"
                type='email'
            />
            <label htmlFor='password'>password</label>
            <input
                // ref={inputRef}
                className="form-control"
                placeholder="password"
                type='password'
            />

            <button
                onClick={handleClick}
                className="btn btn-outline-primary mt-5"
            >Focus
            </button>
        </>
    )
}
