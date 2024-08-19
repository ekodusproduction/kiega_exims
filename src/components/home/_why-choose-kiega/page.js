import "./why-choose-kiega.css";

export default function WhyChooseKiega() {
  return (
    <div className="farming-organic-container section-divider">
      <div className="background">
        <img src="/assets/whychoose_keiga_bg.png" alt="Background Image" />
      </div>

      <div className="content-area">
        <div className="image-container">
          <div className="farming-girl-img-container">
            <div className="text-style">
              <i>Why choose kiega</i>
              <span>Few reasons for people choosing kiega</span>
            </div>
            <img
              src="/assets/whychoose_keiga_button.png"
              alt="Why Choose Kiega Button"
              className="whychoose_keiga_button"
            />
          </div>
          <div className="farming-girl-img-container">
            <img src="/assets/whychoose_kiega.png" alt="Farming Girl Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
