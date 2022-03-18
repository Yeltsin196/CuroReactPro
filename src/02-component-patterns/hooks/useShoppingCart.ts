import React from "react";
import { Product, ProductIncart } from "../interfaces/interfaces";



export const UseShoppingCart = () => {
    const [ShoppingCart, setShoppingCart] = React.useState<{
        [key: string]: ProductIncart;
    }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((oldShoppingCart) => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return {
                    ...rest,
                };
            }
            return { ...oldShoppingCart, [product.id]: { ...product, count } };
        });
    };
    return {
        ShoppingCart, onProductCountChange
    };
}