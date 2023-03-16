import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas sobre useForm', () => {

    const initialForm = {
        name: 'daniel',
        email: 'dani@gmail.com',
    }

    test('Debe regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({ ...initialForm, formState: initialForm, onInputChange: expect.any(Function), onResetForm: expect.any(Function) });
    })

    test('Debe cambiar el valor del formulario (cambiar name)', () => {

        const newValue = 'dani';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
        expect(result.current.formState).toEqual({ ...initialForm, name: newValue });

    })

    test('Debe re-establecer el formulario con RESET', () => {
            
            const { result } = renderHook(() => useForm(initialForm));
            const { onInputChange, onResetForm } = result.current;
    
            act(() => {
                onInputChange({
                    target: {
                        name: 'name',
                        value: 'dani'
                    }
                })
                onResetForm();
            })
    
            expect(result.current.name).toBe(initialForm.name);
            expect(result.current.formState.name).toBe(initialForm.name);
            expect(result.current.formState).toEqual(initialForm);

    })


})