import Image from "next/image";
import "./Awesome-farmer-team.css";

export default function Awesomefarmerteam() {
  return (
    <div className="awesome-farmer-team-container">
      <div className="text-style head-line-aft">
        <span>Checkout New Products</span>
        <br />
        <span>Awesome Farmer Team here to help you</span>
      </div>

      <div className="artboard-images-container">
        <div className="artboard-item">
          <Image
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
            width={500}
            height={600}
          />
          <Image
            src="/assets/Artboard-10.png"
            alt="Artboard Image"
            width={500}
            height={600}
          />
          <Image
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
            width={500}
            height={150}
          />
        </div>

        <div className="artboard-item">
          <Image
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
            width={500}
            height={600}
          />
          <Image
            src="/assets/Artboard-10-copy-2.png"
            alt="Artboard Image"
            width={500}
            height={600}
          />
          <Image
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
            width={500}
            height={150}
          />
        </div>

        <div className="artboard-item">
          <Image
            src="/assets/green-borderadius.png"
            alt="Green Background"
            className="green-border"
            width={500}
            height={600}
          />
          <Image
            src="/assets/Artboard-10-copy.png"
            alt="Artboard Image"
            width={500}
            height={600}
          />
          <Image
            className="orange-image"
            src="/assets/orange.png"
            alt="Orange Decoration"
            width={500}
            height={150}
          />
        </div>

        {/* <div className="artboard-item">
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
        </div> */}
      </div>
    </div>
  );
}
