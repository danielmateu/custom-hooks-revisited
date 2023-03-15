
export const TOdoItem = ({todo, handleDeleteTodo}) => {
    // console.log(todo.id);
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span>{todo.description}</span>
            <button
                className='btn btn-danger'
                onClick={() => handleDeleteTodo(todo.id)}
            >
                Eliminar
            </button>
        </li>
    )
}
