
export const TOdoItem = ({ todo, handleDeleteTodo, handleToggle }) => {
    // console.log(todo.id);
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span
                className={todo.done ? 'text-decoration-line-through' : ''}
                onClick={() => handleToggle(todo.id)}
            >
                {todo.description}
            </span>
            <button
                className='btn btn-danger'
                onClick={() => handleDeleteTodo(todo.id)}
            >
                Eliminar
            </button>
        </li>
    )
}
