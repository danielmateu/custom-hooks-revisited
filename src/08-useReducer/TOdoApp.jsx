import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Aprender React',
    //     done: false
    // },
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TOdoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    // add to Localstorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo
        })
    }

    // Delete todo
    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId
        })
    }

    return (
        <>
            <div className="d-flex">
                <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList
                        todos={todos}
                        // handleDeleteTodo={handleDeleteTodo}
                    />

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoAdd 
                        handleNewTodo={handleNewTodo} 

                    />
                </div>
            </div>
        </>
    )
}
