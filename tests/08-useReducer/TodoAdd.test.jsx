import { render } from "@testing-library/react"

describe('Pruebas sobre TodoAdd', () => {

    const todo = {
        id: 1,
        description: 'Aprender React',
        done: false
    }

    const handleDeleteTodo = jest.fn()
    const handleToggle = jest.fn()

    beforeEach(() => { jest.clearAllMocks() })

    test('Debe de mostrarse correctamente', () => {

        render(<TodoAdd
            handleAddTodo={handleAddTodo}
        />)

        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()


    })

    test('No debe de llamar la función handleAddTodo', () => {

        render(<TodoAdd
            handleAddTodo={handleAddTodo}
        />)
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(handleAddTodo).not.toHaveBeenCalled()

    })

    test('Debe de llamar la función handleAddTodo', () => {

        render(<TodoAdd
            handleAddTodo={handleAddTodo}
        />)
        const inputElement = screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')

        fireEvent.change(inputElement, { target: { value: 'Aprender React' } })
        fireEvent.click(buttonElement)

        expect(handleAddTodo).toHaveBeenCalled()
        expect(handleAddTodo).toHaveBeenCalledTimes(1)
        // expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        // expect(handleAddTodo).toHaveBeenCalledWith({
        //     id: expect.any(Number),
        //     description: 'Aprender React',
        //     done: false
        // })

        // expect(inputElement.value).toBe('')
    })

    test('Debe de limpiar el input', () => {

        render(<TodoAdd
            handleAddTodo={handleAddTodo}
        />)
        const inputElement = screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')

        fireEvent.change(inputElement, { target: { value: 'Aprender React' } })
        fireEvent.click(buttonElement)

        

        expect(inputElement.value).toBe('')

    })



})