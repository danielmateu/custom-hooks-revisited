import { useContext } from "react"
import UserContext from "./context/USerProvider"




const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)
    console.log(user);


    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>


            <button
                className="btn btn-primary"
                onClick={() => setUser({ 
                    id: 123,
                    name: 'dani',
                    mail: 'dani@gmail.com'
                })}
            >
                Establecer usuario
            </button>
        </>
    )
}

export default LoginPage