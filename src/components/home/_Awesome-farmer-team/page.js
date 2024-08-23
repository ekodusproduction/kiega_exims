import "./Awesome-farmer-team.css";

export default function Awesomefarmerteam() {
  return (
    <div className="awesome-farmer-team-container">
      <div className="text-style" style={{marginTop:'300px'}}>
        <span>Checkout New Products</span>
        <br />
        <span>Awesome Farmer Team here to help you</span>
      </div>

      <div className="artboard-images-container">
        <div className="artboard-item">
          <img
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
          />
          <img
            src="/assets/Artboard-10.png"
            alt="Artboard Image"
          />
          <img
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
          />
        </div>
        
        <div className="artboard-item">
          <img
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
          />
          <img
            src="/assets/Artboard-10-copy.png"
            alt="Artboard Image"
          />
          <img
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
          />
        </div>
        <div className="artboard-item">
          <img
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
          />
          <img
            src="/assets/Artboard-10-copy-2.png"
            alt="Artboard Image"
          />
          <img
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
          />
        </div>
      </div>
    </div>
  );
}
