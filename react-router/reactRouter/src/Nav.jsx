import { Link, Outlet } from "react-router";
import "./header.css"

function Nav() {
    
    return (
      <div>
        <div className="header">
          <div>
            <Link className="link" to="/">
              <h2>Logo</h2>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/college">
                  College
                </Link>
              </li>
              <li>
                <Link className="link" to="/user">
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