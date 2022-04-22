import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "./../components";
import "../styles/custom-styles.css";

import { products } from "./../data/products";
const product = products[0];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          key={product.id}
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({ reset }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
              ></ProductImage>
              <ProductTitle className=" text-bold"></ProductTitle>
              <ProductBottons className="custom-bottons"></ProductBottons>
              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
