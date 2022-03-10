/* import { ReactElement } from "react"; */
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductBottonsProps } from './../components/ProductBottons';

/* export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}
 */
export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductContextProps {
    Counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: ProductBottonsProps) => JSX.Element,

}