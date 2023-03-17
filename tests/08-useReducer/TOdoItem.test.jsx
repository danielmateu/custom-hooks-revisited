import { render, screen } from "@testing-library/react"
import { TOdoItem } from "../../src/08-useReducer/TOdoItem"

describe('Pruebas sobre TOdoItem', () => {

    const todo = {
        id: 1,
        description: 'Aprender React',
        done: false
    }

    const handleDeleteTodo = jest.fn()
    const handleToggle = jest.fn()

    beforeEach(() => { jest.clearAllMocks() })

    test('Debe de mostrarse el Todo pendiente de completar', () => {

        render(<TOdoItem
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggle={handleToggle}
        />)

        const liElement = screen.getByRole('listitem')
        // console.log(liElement)
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')
        
        const spanElement = screen.getByText(todo.description)
        expect(spanElement.className).toContain('')
        expect(spanElement.tagName).toBe('SPAN')

        expect(handleDeleteTodo).not.toHaveBeenCalled()
        expect(handleToggle).not.toHaveBeenCalled()

    })
})