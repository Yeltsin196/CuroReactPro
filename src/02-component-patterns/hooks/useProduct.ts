import React from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';
interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}
export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [Counter, setCounter] = React.useState<number>(value);
    const isControlled = React.useRef(!!!onChange);
    React.useEffect(() => {
        setCounter(value);
    }, [value]);

    const increaseBy = (value: number) => {
        const newValue = Math.max(Counter + value, 0);
        if (isControlled) {
            return onChange!({ count: value, product });
        }
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    return { Counter, increaseBy }
};
