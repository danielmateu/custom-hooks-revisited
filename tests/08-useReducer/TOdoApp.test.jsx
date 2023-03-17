import { render, screen } from "@testing-library/react"
import { TOdoApp } from "../../src/08-useReducer/TOdoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')

describe('Pruebas sobre TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [{id: 1,description: 'Aprender React',done: false}, {id: 2,description: 'Aprender Mongo',done: true}],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggle: jest.fn()
    })

    test('Debe de mostrar el componente correctamente', () => {
        
        render(<TOdoApp />)
        // screen.debug()
        expect(screen.getByText('Aprender React')).toBeTruthy()
        expect(screen.getByText('Aprender Mongo')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })


})