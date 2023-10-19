import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToshow: string;

  if (img) {
    imgToshow = img;
  } else if (product.img) {
    imgToshow = product.img;
  } else {
    imgToshow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}}`}
      src={img ? img : noImage}
      alt=" Coofee Mug"
    />
  );
};
