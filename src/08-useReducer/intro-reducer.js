
const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    },
    {
        id: 2,
        todo: 'Comprar leche',
        done: false
    },
    {
        id: 3,
        todo: 'Comprar agua',
        done: false
    }

]

const todoReducer = ( state = initialState, action = {}) => {
    
        if ( action?.type === 'agregar' ) {
            return [ ...state, action.payload ];
        }
    
        return state;
    
    }

let todos = todoReducer();
// console.log(todos);
const newTodo = {
    id: 4,
    todo: 'Comprar jamón',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction );

console.log(todos);



