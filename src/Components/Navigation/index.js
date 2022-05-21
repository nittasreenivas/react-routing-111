import "./style.css";
import { Link } from "react-router-dom";
export default function Navigation(props) {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          {!props.isLogin ? (
            <Link to="/signin"> Signin </Link>
          ) : (
            <button onClick={props.handleLogout}>Signout </button>
          )}
        </li>
      </ul>
    </div>
  );
}
