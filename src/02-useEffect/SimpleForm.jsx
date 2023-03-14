import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect Called!')
    }, [])

    useEffect(() => {
        // console.log('FormState Changed!')
    }, [formState])

    useEffect(() => {
        // console.log('Email Changed!')
    }, [email])

    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <form action="">
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='User name'
                    name='username'
                    id='username'
                    value={username}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleInputChange}
                />
            </form>
            {
                username === 'dani' && <Message />
            }
        </>
    )
}
