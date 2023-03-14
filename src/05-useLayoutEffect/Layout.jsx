import { Error } from "../components/Error";
import { Juego } from "../components/Juego";
import { Loading } from "../components/Loading";
import { TItle } from "../components/TItle";
import { useCounter, useFetch } from "../hooks";


export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, loading, error } = useFetch(`https://zelda.fanapis.com/api/games?limit=${counter}}`)
    const juegos = data.data;

    return (
        <>
            <h1 className='text-center'>The Legend Of Zelda</h1>
            <hr />

            <button
                onClick={() => increment(1)}
                disabled={loading}
                className='btn btn-success'>
                Increment
            </button>
            <button
                onClick={() => reset()}
                disabled={loading}
                className='btn btn-danger'>
                Reset
            </button>
            <button
                onClick={() => decrement(1)}
                disabled={loading}
                className='btn btn-info'>
                Decrement
            </button>

            {data && <TItle data = {data}/>}

            {juegos && juegos.map(juego => (
                <Juego key={juego.id} juego={juego} />
            ))}

            {loading && <Loading loading={loading} />}

            {error && <Error error={error}/>}
        </>
    )
}