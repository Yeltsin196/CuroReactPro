import styles from "../styles/styles.module.css";
import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "./../hooks/useProduct";
import {
  Product /* 
  ProductCardProps, */,
  ProductContextProps,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { Counter, increaseBy } = useProduct();
  return (
    <Provider value={{ Counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children}
      </div>
    </Provider>
  );
};
