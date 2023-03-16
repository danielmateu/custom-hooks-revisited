import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('useCounter Hook', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    })

    test('should have counter at 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);

    })

    test('should increment counter by 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment(1);
        })
        const { counter } = result.current;
        expect(counter).toBe(101);


    })

    test('should decrement counter by 2', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement(2);
        })
        const { counter } = result.current;
        expect(counter).toBe(98);

    })

    test('should reset counter to 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;
        act(() => {
            increment(1);
            reset();
        })
        const { counter } = result.current;
        expect(counter).toBe(100);

    })

})