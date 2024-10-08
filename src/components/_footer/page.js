import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-bg">
          <img src="/assets/footer-bg.png" alt="footer bg" />
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/kiega-logo-white.png" alt="footer kiega logo" />
            <h6>
              We provide Fresh Organic <br /> fruits and vegetables
            </h6>
            <div className="social-media-links">
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-instagram"></i>
            </div>
          </div>

          <div className="footer-links">
            <h5 style={{ marginLeft: "25px" }}>Explore</h5>
            <ul>
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/riceandcorn" className="footer-link">
                  Rice and Corn
                </Link>
              </li>
              <li>
                <Link href="/source-northeast" className="footer-link">
                  North-East Source
                </Link>
              </li>
              <li>
                <Link href="/social-impact" className="footer-link">
                  Social Impact
                </Link>
              </li>

            </ul>
          </div>

          <div className="footer-contact-us">
            <h5 style={{ marginLeft: 25 }}>Contact Us</h5>
            <p>
              <i className="bx bx-phone-call"></i>
              +91 78974-57896
            </p>
            <p style={{ marginLeft: "20px" }}>
              <i className="bx bx-mail-send"></i>
              info@kiegaexims.com
            </p>

            <div className="sign-in">
              <h5>Sign In</h5>
              <p>
                <i className="bx bx-log-in-circle"></i>
                Customer Log In
              </p>
            </div>
          </div>

          <div className="footer-gallery">
            <h5>Gallery</h5>
            <img src="/assets/gallery.png" alt="footer gallery" />
          </div>
        </div>
      </div>
    </>
  );
}
