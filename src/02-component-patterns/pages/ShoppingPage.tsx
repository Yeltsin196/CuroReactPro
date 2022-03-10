import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "./../components";
import "../styles/custom-styles.css";
export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image
            img={product.img}
            className="custom-image"
          ></ProductCard.Image>
          <ProductCard.Title
            title={product.title}
            className=" text-bold"
          ></ProductCard.Title>
          <ProductCard.Buttons className="custom-bottons"></ProductCard.Buttons>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            img={product.img}
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
          ></ProductImage>
          <ProductTitle
            title={product.title}
            className=" text-bold"
          ></ProductTitle>
          <ProductBottons className="custom-bottons"></ProductBottons>
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            img={product.img}
            style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)" }}
          ></ProductImage>
          <ProductTitle
            title={product.title}
            style={{ fontWeight: "bold" }}
          ></ProductTitle>
          <ProductBottons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          ></ProductBottons>
        </ProductCard>
      </div>
    </div>
  );
};
