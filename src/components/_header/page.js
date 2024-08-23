import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="header-items">
          <div className="small-logo-area">
            <Link href="/">
              <img src="/assets/small-logo.png" alt="kiega logo" />
            </Link>
          </div>
          <div className="header-nav-menu">
            <div className="dropdown">
              <a
                className="btn btn-default"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bx bx-menu"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Rice and Corn
                  </a>
                </li>
                <li>
                  <Link href="/fruit" className="dropdown-item">
                    Organic Fruits
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Organic Vegetables
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
