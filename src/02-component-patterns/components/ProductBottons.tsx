import * as React from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductBottons = ({ className, style }: Props) => {
  const { increaseBy, Counter } = React.useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{Counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
