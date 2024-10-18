import "./fruit.css";

export default function FruitPage() {
  return (
    <div>
      <div className="fruit-container">
        <img src="/assets/fruitbanner.png" alt="fruits header image" />
        {/* pineappledivision */}
        <div>
          <img src="/assets/pineapplewithtext.png" alt="fruits header image" />

          <div
            className="image-box"
            style={{
              backgroundColor: "#0f721f",
              borderWidth: "10px",
              borderColor: "#104b21",
              borderStyle: "solid",
              padding: "10px",
              borderTopRightRadius: "100px", // Corrected property for top-right rounding
              borderBottomRightRadius: "100px", // Added property for bottom-right rounding
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img
                src="/assets/pineapplepiece.png"
                alt="pineapple"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/pineapplepiece.png"
                alt="pineapple"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/pineapplepiece.png"
                alt="pineapple"
                style={{ width: "300px", height: "180px" }}
              />
            </div>
          </div>
          <div
            className="style-textbox pine"            
          >
            <p className="bullet" style={{ fontSize: 15}}>
              <strong>PINEAPPLES</strong> are widely grown in the northeastern
              states of India, including Assam, Meghalaya, and Tripura. The most
              popular varieties grown in the region are Kew and Queen, which are
              known for being sweet and having less fiber.
            </p>

            <p className="bullet" style={{ fontSize: 15 }}>
              In <strong>Meghalaya</strong>, pineapples are traditionally grown
              on hilly slopes using rainfed conditions and indigenous cultural
              practices. These fruits are free from chemical residues and have
              the potential to be developed into certified organic pineapple
              producing hubs.
            </p>

            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Pineapples</strong> from the region are in high demand in
              both the national and global markets, and the area is considered
              ideal for pineapple cultivation. The fruit is available year-round
              in the form of juice or slices, and pineapple juice can also be
              used in folk medicine as a diuretic, to expedite labor, and as a
              gargle for sore throats
            </p>
          </div>
        </div>

        {/* kiwidivision */}
        <div style={{ marginTop: '3rem' }}>
          <img src="/assets/kiwiwithtext.png" alt="fruits header image" />

          <div 
            className="image-box"        
            style={{
              backgroundColor: "#5d6e2f",
              borderWidth: "10px",
              borderColor: "#a8ce58",
              borderStyle: "solid",
              padding: "10px",
              borderTopLeftRadius: "100px", // Corrected property for top-right rounding
              borderBottomLeftRadius: "100px", // Added property for bottom-right rounding
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img
                className='res-hidden'
                src="/assets/kiwihalf.png"
                alt="kiwi"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/kiwihalf.png"
                alt="kiwi"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                src="/assets/kiwihalf.png"
                alt="kiwi"
                style={{ width: "300px", height: "180px" }}
              />
            </div>
          </div>
          <div
            className="style-textbox kiwi"
          >
            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              <strong> Arunachal Pradesh</strong> is the largest producer of
              kiwis in India, and the fruit is also grown in other states in the
              northeast, including{" "}
              <strong>Nagaland, Manipur, Sikkim, and Meghalaya</strong>. The
              state's natural agro-climate conditions are ideal for kiwi
              cultivation, and in 2000, farmers began to recognize the fruit's
              commercial potential. In 2020, Arunachal Pradesh became the first
              state in India to receive organic certification for kiwis from the
              Agricultural and{" "}
              <strong>
                Processed Food Products Export Development Authority (APEDA)
              </strong>
              . This certification is a result of a strict scientific
              assessment, and it's expected to boost the local economy and put
              Arunachal Pradesh on the national radar as a potential producer.
            </p>
            <p className="bullet">
              Lower Subansiri district of <strong>Arunachal Pradesh</strong> is
              the only district to produce <strong>kiwi</strong> fruit in the
              cluster
            </p>
          </div>
        </div>

        {/* litchidivision */}
        <div style={{ marginTop: '3rem' }}>
          <img src="/assets/litchiwithtext.png" alt="fruits header image" />

          <div
            className="image-box"
            style={{
              backgroundColor: "#75090d",
              borderWidth: "10px",
              borderColor: "#e29c79",
              borderStyle: "solid",
              padding: "10px",
              borderTopRightRadius: "100px", // Corrected property for top-right rounding
              borderBottomRightRadius: "100px", // Added property for bottom-right rounding
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img
                className='res-hidden'
                src="/assets/litchihalf.png"
                alt="litchi"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/litchihalf.png"
                alt="litchi"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                src="/assets/litchihalf.png"
                alt="litchi"
                style={{ width: "300px", height: "180px" }}
              />
            </div>
          </div>
          <div
            className="style-textbox litchi"
          >
            <p className="bullet"  style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Litchi</strong> (Litchi Chinensis) is a subtropical
              evergreen fruit grown in several regions of northeastern India,
              including <strong>Meghalaya, Assam, and Nagaland</strong>.
            </p>

            <h5 className="bullet">Meghalaya</h5>
            <p style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Litchi</strong> is grown in the North and East Garo Hills,
              and the border areas of Ri Bhoi and Khasi Hills. Litchi from this
              region is earlymedium in maturity, except for the Nongjri variety,
              which matures late.
            </p>
            <h5 className="bullet">Assam</h5>
            <p style={{ font: "Roboto", fontSize: 15 }}>
              Litchi is grown in <strong>Tezpur</strong>, where it's known for
              its quality, flavor, juicy pulp, and attractive red color. The
              most common varieties grown in Tezpur are Bombaiya, Piyaji, and
              Bilatee, and the best varieties are Bombaiya and Elaichi. In
              November 2020, Tezpur litchi was granted a{" "}
              <strong>Geographical Indication (GI)</strong> tag to protect it
              from production elsewhere and to certify its origins in the state.
            </p>

            <h5 className="bullet">Nagaland</h5>
            <p style={{ font: "Roboto", fontSize: 15 }}>
              Litchi production practices in Nagaland include soil and climate,
              cultivars, propagation, planting, training and pruning, manure and
              fertilizer, irrigation, mulching, and water conservation
            </p>
          </div>
        </div>

        {/* mangodivision */}
        <div style={{ marginTop: '3rem' }}>
          <img src="/assets/mangowithtext.png" alt="fruits header image" />

          <div
            className="image-box"
            style={{
              backgroundColor: "#d79022",
              borderWidth: "10px",
              borderColor: "#fdcc41",
              borderStyle: "solid",
              padding: "10px",
              borderTopLeftRadius: "100px", // Corrected property for top-right rounding
              borderBottomLeftRadius: "100px", // Added property for bottom-right rounding
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <img
                className='res-hidden'
                src="/assets/mangohalf.png"
                alt="mango"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/mangohalf.png"
                alt="mango"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                src="/assets/mangohalf.png"
                alt="mango"
                style={{ width: "300px", height: "180px" }}
              />
            </div>
          </div>
          <div
            className="style-textbox mango"
          >
            <p className="bullet"  style={{ font: "Roboto", fontSize: 15 }}>
              In the <strong>North Eastern Region</strong> (NER) of India, <strong>mango</strong> is mainly
              cultivated in subtropical plain / mid hill region of Assam,
              Manipur, Tripura, Mizoram and Meghalaya. Cultivation of <strong>mango</strong> is
              believed to have originated in South East Asia. <strong>mango</strong> is being
              cultivated in southern Asia for nearly six thousand years. .
            </p>
            <p className="bullet">
              The <strong>mango</strong> fruit is very popular due to its wide range of
              adaptability, high nutritive value, richness in variety, delicious
              taste and excellent favour. It is a rich source of vitamin A and
              C. The fruit is consumed raw or ripe. Good <strong>mango</strong> varieties contain
              20% of total soluble sugars.
            </p>

            <p className="bullet">
              <strong>mango</strong> is well adapted to tropical and sub-tropical climates. It
              thrives well in almost all the regions of the country but cannot
              be grown commercially in areas above 600 m. It cannot stand severe
              frost, especially when the tree is young. High temperature by
              itself is not so injurious to <strong>mango</strong>, but in combination with low
              humidity and high winds, it asects the tree adversely.
            </p>
            <p className="bullet">
              The <strong>North Eastern Region</strong> (NER) of India needs a special attention
              for promoting the cultivation of <strong>mango</strong> particularly in the area
              suitable for its cultivation and wild varieties may also be
              brought under consideration for further investigation and its
              subsequent use in <strong>mango</strong> development programme through further
              research.
            </p>
          </div>
        </div>

        {/* jackfruitdivision */}
        <div style={{ marginTop: '3rem' }}>
          <img src="/assets/jackfruitwithtext.png" alt="fruits header image" />

          <div
            className="image-box"
            style={{              
              backgroundColor: "#2a3f1d",
              borderWidth: "10px",
              borderColor: "#daefc4",
              borderStyle: "solid",
              padding: "10px",
              borderTopRightRadius: "100px", // Corrected property for top-right rounding
              borderBottomRightRadius: "100px", // Added property for bottom-right rounding
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img
                className='res-hidden'
                src="/assets/jackfruithalf.png"
                alt="jackfruit"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                className='res-hidden'
                src="/assets/jackfruithalf.png"
                alt="jackfruit"
                style={{ width: "300px", height: "180px" }}
              />
              <img
                src="/assets/jackfruithalf.png"
                alt="jackfruit"
                style={{ width: "300px", height: "180px" }}
              />
            </div>
          </div>
          <div
            className="style-textbox jack"s
          >
            <p className="bullet"  style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Tripura</strong> jackfruits have been making their way to
              Bangladesh markets for decades through riverine routes.Tripura has
              also exported jackfruits to{" "}
              <strong>Germany, England, and London.</strong>
            </p>

            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              The horticulture department of Tripura has been working on
              increasing the shelf life of jackfruit through natural processes.
              The state government has also launched a 153 crore Pineapple &
              Jackfruit Mission for the next 5 years.
            </p>
            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Tripura jackfruit</strong> is a popular fruit ranking
              first in total area and annual production in Tripura (Table 1).
              Tripura is considered to be the home of jackfruit and it is
              reservoir of many year-round producing genotypes. Diverse forms of
              jack have been growing in hilly slopes and plains
            </p>

            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              In a major step towards harnessing exports potential of
              agricultural and processed food products from north-eastern
              region, a shipment of 1.2 metric tonne (MT) of fresh jackfruit was
              exported from <strong>Tripura to London.</strong>
            </p>
            <p className="bullet" style={{ font: "Roboto", fontSize: 15 }}>
              <strong>Jackfruits</strong> were sourced from the{" "}
              <strong>Tripura</strong> based Krishi Sanyoga Agro Producer
              Company Ltd. The consignment was packed at APEDA assisted
              pack-house facility of Salt Range Supply Chain Solution Ltd and
              exported by <strong>Kiega EXIM Pvt Ltd</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
