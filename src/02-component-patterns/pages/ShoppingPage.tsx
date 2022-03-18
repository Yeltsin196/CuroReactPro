import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "./../components";
import "../styles/custom-styles.css";
import { UseShoppingCart } from "./../hooks/useShoppingCart";
import { products } from "./../data/products";

export const ShoppingPage = () => {
  const { ShoppingCart, onProductCountChange } = UseShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={ShoppingCart[product.id]?.count || 0}
            key={product.id}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
            ></ProductImage>
            <ProductTitle className=" text-bold"></ProductTitle>
            <ProductBottons className="custom-bottons"></ProductBottons>
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(ShoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
            ></ProductImage>

            <ProductBottons
              className="custom-bottons"
              style={{ display: "flex", justifyContent: "center" }}
            ></ProductBottons>
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(ShoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
