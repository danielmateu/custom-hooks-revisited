
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TOdoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggle } = useTodo(initialState, init)
    // todos.filter(todo => !todo.done).length
    return (
        <>
            <div className="d-flex">
                <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
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
