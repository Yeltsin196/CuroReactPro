import styles from "../styles/styles.module.css";

/* import noImage from "../assets/no-image.jpg";
import { useState } from "react"; */
import { useProduct } from "./../hooks/useProduct";

export const ProductCard = () => {
  const { Counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={"./coffee-mug.png"} alt="" />
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{Counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
