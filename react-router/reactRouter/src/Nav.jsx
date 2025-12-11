import { Link, Outlet } from "react-router";
import "./header.css";

function Nav() {
  return (
    <div>
      <div classNameName="header">
        <div>
          <Link classNameName="link" to="/">
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link classNameName="link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link classNameName="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link classNameName="link" to="/college">
                College
              </Link>
            </li>
            <li>
              <Link classNameName="link" to="/user">
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
