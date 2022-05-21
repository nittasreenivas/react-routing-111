import "./style.css";
import { Link } from "react-router-dom";
export const products = [
  {
    id: 1,
    title: "Iphone",
    description: "description about Iphone",
    price: "1,00,000"
  },
  {
    id: 2,
    title: "Samsung",
    description: "description about Samsung",
    price: "70,000"
  },
  {
    id: 3,
    title: "Vivo",
    description: "description about Vivo",
    price: "60,000"
  },
  {
    id: 4,
    title: "One plus",
    description: "description about One plus",
    price: "50,000"
  },
  {
    id: 5,
    title: "Nokia",
    description: "description about Nokia",
    price: "40,000"
  }
];
export default function Products() {
  const productElements = products.map((item) => {
    return (
      <ul className="products-items" key={item.id}>
        <li>
          <h3>
            <Link to={`/products/${item.id}`} state={item}>
              {" "}
              {item.title}{" "}
            </Link>
          </h3>
          <p> {item.description} </p>
          <b> price:Rs {item.price} </b>
        </li>
      </ul>
    );
  });
  return <div className="products-list">{productElements}</div>;
}
