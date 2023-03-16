import { createContext } from 'react'


const UserContext = createContext();

const user = {
    id: 123,
    name: 'Dani',
    email: 'danielmateu@gmail.com'
}

const UserProvider = ({ children }) => {

    return (
        <UserContext.Provider
            value={{
                user: user,
                hola: 'mundo'
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {
    UserProvider
}

export default UserContext
