import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TOdoApp = () => {

    const {todos,handleNewTodo,handleDeleteTodo,handleToggle} = useTodo(initialState,init)

    return (
        <>
            <div className="d-flex">
                <h1>TodoApp {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggle={handleToggle}
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
