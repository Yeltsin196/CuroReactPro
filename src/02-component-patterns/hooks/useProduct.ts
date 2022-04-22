import React, { useRef } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import { InitialValues } from './../interfaces/interfaces';
interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}
export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [Counter, setCounter] = React.useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    React.useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);
    React.useEffect(() => {
        isMounted.current = true;
    }, []);
    const increaseBy = (value: number) => {
        let newValue = Math.max(Counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues?.maxCount);
        }
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    }
    return {
        Counter, increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === Counter,
        reset: reset
    }
};
