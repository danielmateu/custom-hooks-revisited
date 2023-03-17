import { Error } from "../components/Error";
import { Juego } from "../components/Juego";
import { Loading } from "../components/Loading";
import { TItle } from "../components/TItle";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon`)
    const pokemons = data.results;
    console.log(pokemons);
    

    return (
        <>
            <h1 className='text-center'>The Legend Of Pokemons</h1>
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

            {pokemons && pokemons.map(pokemon => (
                <Juego key={pokemon.url} juego={pokemon} />
            ))}

            {loading && <Loading loading={loading} />}

            {error && <Error error={error}/>}
        </>
    )
}
