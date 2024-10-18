import './fresh-and-organic.css';
import FruiteStatic from './_fruit-static/page';

export default function FreshAndOrganic() {
  return (
    <>
      <div className="fresh-and-organic section-divider">
        <div className="banner">
          <img
            src="/assets/fresh-and-organic-banner.png"
            alt="fresh and organic banner"
          />
          <div className="main-title">
            <h2>
              FRESH & <br /> ORGANIC
            </h2>
            <div className="sub-title">
              <h6>
                Reliable, efficient and consistent supply of <br />
                organic products to the global market.
              </h6>
            </div>
          </div>
        </div>
        <div className="explore-full-range-section mt-3">
          <div className="explore-full-range-button">
            <h5>
              100% FRESH & ORGANIC. A diverse range of agricultural <br />{" "}
              products supplying them to high-end markets{" "}
            </h5>
            <button
              className="btn btn-primary btn-md  p-2 px-3"
              style={{ background: "#1B1464", border: "1px solid #1B1464" }}
            >
              Explore full range
            </button>
            <button
              className="btn btn-success btn-md p-2 px-3 my-3 mx-3"
              style={{ background: "#37C609", border: "1px solid #37C609" }}
            >
              Explore full range
            </button>
          </div>
        </div>

        <div className="fruit-slider-container">
          <FruiteStatic />
        </div>
      </div>
    </>
  );
}
