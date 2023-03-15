import React from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({ handleNewTodo }) => {

    const { onInputChange, onResetForm, description } = useForm({description: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        /* A short-circuit evaluation. If handleNewTodo is null, then the second part of the expression
        will not be evaluated. */
        handleNewTodo && handleNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form
            action=""
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                value={description}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>


    )
}
