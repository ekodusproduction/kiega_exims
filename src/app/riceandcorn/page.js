import "./riceandcorn.css";
export default function RiceandCorn() {
  return (
    <div>
      <div>
        <img
          src="/assets/riceandcornbanner.png"
          alt="fruits header image"
          width={"100%"}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>suraj</p>
        </div>
        <div>
          <p>sraj</p>
        </div>
      </div>
    </div>
  );
}
