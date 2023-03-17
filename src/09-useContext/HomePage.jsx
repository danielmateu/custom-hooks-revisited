import { useContext } from "react"
import UserContext from "./context/USerProvider"



const HomePage = () => {

    const { user } = useContext(UserContext)

    return (

        <>
            <h1>Welcome <small>{user?.name.toUpperCase()}!</small></h1>
            <hr />
            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}

export default HomePage