import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas sobre MainApp', () => {

    test('Debe mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getByText('useContext')).toBeTruthy()
    })

    test('Debe mostrar el loginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
    })

})