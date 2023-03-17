import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];

    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe agregar un TODO', () => {

        const action = {
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: 'Aprender Mongo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: initialState[0].id
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test('debe hacer el TOGGLE del TODO', () => {

        const action = {
            type: 'toggle',
            payload: initialState[0].id
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    })
})