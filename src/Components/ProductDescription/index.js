import { useParams } from "react-router-dom";
import { products } from "../Products";
export default function ProductDescription() {
  const params = useParams();
  console.log("Params:", params);
  const product = products.find((item) => item.id == params.id);
  return (
    <div>
      <h2> Product Description </h2>
      <h3> {product.title} </h3>
      <p> {product.description} </p>
      <b> price:Rs {product.price} </b>
    </div>
  );
}
