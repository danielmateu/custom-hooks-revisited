import { render, screen } from "@testing-library/react"
import UserContext from "../../src/09-useContext/context/USerProvider"
import LoginPage from "../../src/09-useContext/LoginPage"

describe('Pruebas sobre LoginPage', () => {

    test('Debe mostrar el componente sin el usuario', () => {


        render(
            <UserContext.Provider
                value={{ user: null }}

            >
                <LoginPage
                    // user={null}
                    // setUser={() => { }}

                />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    test('Debe mostrar el componente con el usuario', () => {

        const user = {
            name: 'dani',
            email: '',
            id: 123
        }

        render(
            <UserContext.Provider
                value={{ user }}

            >
                <LoginPage
                    user={user}
                    setUser={() => { }}

                />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.email);
        expect(preTag.innerHTML).toContain(`${user.id}`)

    })

    test('Debe de llamar el setUser cuando se hace click en el botón', () => {

        const user = {
            name: 'dani',
            email: 'dani@gmail.com',
            id: 123
        }

        const setUser = jest.fn()

        render(
            <UserContext.Provider
                value={{ user, setUser }}

            >
                <LoginPage
                    user={user}
                    setUser={setUser}

                />
            </UserContext.Provider>
        )

        const button = screen.getByText('Establecer usuario')
        button.click()

        expect(setUser).toHaveBeenCalled()
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'dani',
            mail: 'dani@gmail.com'
        })

    })

})