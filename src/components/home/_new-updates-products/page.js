import "./new-updates-products.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewUpdatesProducts() {
  return ( 
    <div className="container mt5">
      <div className="row justify-content-center text-center my-1">
        <div className="col-md-8">
          <div className="text-style">
            <h2>Our New Products from Various Locations</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="justify-content-center">
          <div className="new-product">
            <div className="image-container">
              <img
                src="/assets/arunachal.png"
                alt="Arunachal"
                className="img-fluid"
              />
            </div>
            <div className="image-container">
              <img
                src="/assets/tezpur.png"
                alt="Tezpur"
                className="img-fluid"
              />
            </div>
            <div className="image-container">
              <img
                src="/assets/meghalaya.png"
                alt="Meghalaya"
                className="img-fluid"
              />
            </div>
            <div className="image-container">
              <img
                src="/assets/tripura.png"
                alt="Tripura"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 50 }}>
        <span
          className="row justify-content-center text-center"
          style={{
            color: "green",
            fontStyle: "italic",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "20px",
          }}
        >
          From the Blog Post
        </span>

        <h2
          className="row justify-content-center text-center font-weight-bold"
          style={{ fontSize: "24px" }}
        >
          Latest news updates & articles
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="new-product">
              <div className="image-container">
                <img
                  src="/assets/organic-pineapple.png"
                  alt="Green Background"
                  className="img-fluid"
                />
              </div>
              <div className="image-container">
                <img
                  src="/assets/organic-litchi.png"
                  alt="Green Background"
                  className="img-fluid"
                />
              </div>
              <div className="image-container">
                <img
                  src="/assets/organic-dragon.png"
                  alt="Green Background"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
