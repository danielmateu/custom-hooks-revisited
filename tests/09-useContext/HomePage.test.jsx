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
        screen.debug()


    })
})