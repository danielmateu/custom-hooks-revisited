
import { TOdoItem } from './TOdoItem'

export const TodoList = ({ todos}) => {
    // console.log(todos);
    return (
        <ul className='list-group'>
            {
                todos.map((todo) => (
                    <TOdoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )
}
