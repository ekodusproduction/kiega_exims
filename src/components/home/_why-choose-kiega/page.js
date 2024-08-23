import "./why-choose-kiega.css";

export default function WhyChooseKiega() {
  return (
    <div className="organic-farming-container section-divider">
      <div className="content-area">
        <div className="image-container">
          <div className="farming-girl-container">
            <div className="text-header">
              <i>Why choose Kiega</i>
              <span>Few reasons for people choosing Kiega</span>
            </div>
            <img
              src="/assets/whychoose_keiga_button.png"
              alt="Why Choose Kiega Button"
              className="choose-kiega-button"
            />
          </div>
          <div className="farming-girl-image-container">
            <img src="/assets/whychoose_kiega.png" alt="Farming Girl Image" />
          </div>
        </div>
      </div>
      <div className="background-image">
        <img src="/assets/whychoose_keiga_bg.png" alt="Background Image" />
      </div>
    </div>
  );
}