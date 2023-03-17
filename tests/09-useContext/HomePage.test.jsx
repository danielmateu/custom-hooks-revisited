import { render, screen } from "@testing-library/react"
import UserContext from "../../src/09-useContext/context/USerProvider"
import HomePage from "../../src/09-useContext/HomePage"

describe('Pruebas sobre HomePage', () => {
    test('Debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider
                value={{user: null}}>
                <HomePage />
            </UserContext.Provider>

        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    })

    test('Debe mostrar el componente con el usuario', () => {
            
            const user = {
                name: 'dani',
                email: '',
                id: 123
            }

            render(
                <UserContext.Provider
                    value={{user}}>
                    <HomePage />
                </UserContext.Provider>

            )

            const preTag = screen.getByLabelText('pre')
            expect(preTag.innerHTML).toContain(user.name);
            expect(preTag.innerHTML).toContain(user.email);
            expect(preTag.innerHTML).toContain(`${user.id}`)
            // screen.debug()
    })
})