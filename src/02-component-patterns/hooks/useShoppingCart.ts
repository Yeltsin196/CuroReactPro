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
            const ProductInCart = oldShoppingCart[product.id] || {
                ...product,
                count: 0,
            };
            if (Math.max(ProductInCart.count + count, 0) > 0) {
                ProductInCart.count += count;
                return { ...oldShoppingCart, [product.id]: ProductInCart };
            }
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return {
                ...rest,
            };
            /*  if (count === 0) {
              const { [product.id]: toDelete, ...rest } = oldShoppingCart;
              return {
                ...rest,
              };
            }
            return { ...oldShoppingCart, [product.id]: { ...product, count } };*/
        });
    };
    return {
        ShoppingCart, onProductCountChange
    };
}