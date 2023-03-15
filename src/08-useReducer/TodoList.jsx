
import { TOdoItem } from './TOdoItem'

export const TodoList = ({ todos, handleDeleteTodo}) => {
    // console.log(todos);
    return (
        <ul className='list-group'>
            {
                todos.map((todo) => (
                    <TOdoItem
                        key={todo.id}
                        todo={todo}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                ))
            }
        </ul>
    )
}
