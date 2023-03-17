import { useContext } from "react"
import UserContext from "./context/USerProvider"



const HomePage = () => {

    const { user } = useContext(UserContext)

    return (

        <>
            <h1>Welcome <small>{user?.name.toUpperCase()}!</small></h1>
            <hr />

        </>
    )
}

export default HomePage