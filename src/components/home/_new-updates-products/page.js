import "./new-updates-products.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewUpdatesProducts() {
  return (
    <div className="mt5">

      <div className="text-heading flex-box ali-jus">
        <h2>Our New Products from Various Locations</h2>
      </div>
      {/* items starts here */}
      <div className="items-container flex-box ali-jus">
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

      <div style={{ marginTop: 50 }}>
        <div className="flex-box ali-jus">
          <h4
            className=""
            style={{
              color: "green",
              fontStyle: "italic",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "20px",
            }}
          >
            From the Blog Post
          </h4>
        </div>

        <div className="flex-box ali-jus">
          <h2 className="">
            Latest news updates & articles
          </h2>
        </div>

        <div className="items-container flex-box ali-jus">
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
  );
}
