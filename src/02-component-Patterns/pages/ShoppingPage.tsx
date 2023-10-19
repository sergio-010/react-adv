import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffe Mug",
  img: "",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={""} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark , text-white">
          <ProductImage className=" custom-image" />
          <ProductTitle title="" className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{ backgroundColor: "#70d1f8", color: "white" }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
