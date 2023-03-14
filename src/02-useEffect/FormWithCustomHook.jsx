import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const { formState, handleInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState

    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr />
            <form action="">
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='User name'
                    name='username'
                    id='username'
                    value={username}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className='form-control'
                    placeholder='Password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    onClick={onResetForm}
                    type='submit'
                    className='btn btn-primary mt-3'>Reset</button>
            </form>

        </>
    )
}
