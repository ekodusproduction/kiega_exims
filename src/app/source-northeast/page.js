import Image from 'next/image'
import './snpage.css'
import Category from '@/components/_category/page';

export const metadata = {
    title: 'Nort-east source',
};

function SourceNortheastPage() {
    return (
        <>
            <section className='sn-hero-image-section'>
                <Image
                    src="/assets/SNPage/SN-header.png"
                    alt="Source page header Image"
                    width={1200}
                    height={800}
                />
            </section>

            <section className='sn-hero-content'>
                <div className='sn-hero-text para'>
                    <p>
                        The <strong>North-East region</strong> of India is a treasure trove of diverse and exotic horticultural products. Blessed with fertile soils, a unique climate, and lush landscapes, this region has become a hub for a wide array of fruits, vegetables, spices, and flowers that are grown organically and sustainably. Here at Kiega Exims, we are proud to showcase the vibrant produce from this remarkable area.
                    </p>
                </div>
                <div className=''>
                    <Image
                        src="/assets/SNpage/sn-map.png"
                        alt="Source page heade Image"
                        width={500}
                        height={500}
                    />
                </div>
            </section>

            {/* source category  */}

            {/* <Category dataArr={['2.png', '3.png', '4.png', '5.png', '6.png', '7.png']} /> */}

            <Category dataArr={[
                {
                    id: 1,
                    imgsrc: 'assets/SNPage/king-chilly.png',
                    sectionId: 'chilly-section',
                    name: "King Chilli"


                },
                {
                    id: 2,
                    imgsrc: 'assets/SNPage/3.png',
                    sectionId: 'lemon-section',
                    name: "Kaji Lemon"
                },

                {
                    id: 3,
                    imgsrc: 'assets/SNPage/4.png',
                    sectionId: 'ginger-section',
                    name: "Ginger"
                },

                {
                    id: 4,
                    imgsrc: 'assets/SNPage/5.png',
                    sectionId: 'pine-section',
                    name: "Pineapple"
                },

                {
                    id: 5,
                    imgsrc: 'assets/SNPage/6.png',
                    sectionId: 'turmeric-section',
                    name: "Turmeric"
                },

                {
                    id: 6,
                    imgsrc: 'assets/SNPage/7.png',
                    sectionId: 'corn-section',
                    name: "Corn"
                },

            ]} />

            {/* item details */}

            <section className='item-details-section'>
                <div id='chilly-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/chilly-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                <strong>Bhut Jolokia</strong>, also known as King Chilli or Ghost Pepper, is one of the spiciest chilies in the world, originating from the lush, <strong>tropical regions</strong> of North-East India, particularly <strong>Assam</strong>, <strong>Nagaland</strong>, and <strong>Manipur</strong>. This fiery chili has earned global recognition for its intense heat and unique flavor, making it both a culinary marvel and a cultural icon.
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Scoville Rating and Heat</h3>
                            <p>
                                Bhut Jolokia’s claim to fame comes from its scorching heat. On
                                the Scoville Heat Scale, which measures the pungency of chili
                                peppers, Bhut Jolokia has an impressive rating of over
                                1,000,000 Scoville Heat Units (SHU). This places it among the
                                hottest peppers in the world, making it a formidable ingredient in
                                any dish. For comparison, Bhut Jolokia is more than 400 times
                                hotter than an average jalapeño pepper.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/burn-chilly.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                <div id='lemon-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/lemon-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                Assam Lemon, locally known as Kaji Nemu, is a distinctive
                                variety of lemon native to the state of Assam in North-East India.
                                It is highly valued for its aromatic fragrance, large size, and
                                versatile culinary applications. Often referred to as a "juicy
                                goldmine, "Kaji Nemu is an integral part of Assamese cuisine and
                                culture, prized for its rich flavor and health benefits.
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Characteristics</h3>
                            <p>
                                1.Appearance: Assam Lemon is larger than the typical lemons found elsewhere. It has an elongated shape, with a bright yellow, smooth skin that is relatively thin, making it easy to extract juice.
                            </p>
                            <p>
                                2.Flavor: Kaji Nemu is renowned for its balanced flavor, which combines the perfect levels of tartness and mild sweetness. The juice has a refreshing, zesty quality that makes it ideal for a wide range of dishes and drinks.
                            </p>
                            <p>
                                3.Aroma: The lemon has a strong, invigorating fragrance, which adds a sensory richness to dishes even before the juice or zest is added.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/lemon-character.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/10.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para flex-col'>
                            <h3>Health Benefits</h3>
                            <p>
                                Assam Lemon is more than just a culinary delight; it also offers
                                several health benefits:
                            </p>
                            <p>
                                1.Rich in Vitamin C: Kaji Nemu is a powerhouse of Vitamin C,
                                which boosts immunity, promotes healthy skin, and helps the
                                body combat infections.
                            </p>
                            <p>
                                2.Digestive Aid: The juice of Kaji Nemu is known to improve
                                digestion, acting as a natural remedy for bloating and
                                indigestion. It is often used in traditional remedies to cleanse the
                                digestive system.
                            </p>
                            <p>
                                3.Antioxidant Properties: Assam Lemon contains antioxidants
                                that help neutralize harmful free radicals, promoting overall
                                health and reducing the risk of chronic diseases.
                            </p>
                            <p>
                                4.Weight Management: When consumed with warm water and
                                honey, Kaji Nemu juice is believed to aid in weight management
                                by improving metabolism and supporting detoxification.
                            </p>
                        </div>
                    </div>
                </div>

                <div id='ginger-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/ginger-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                Ginger, known for its pungent flavor and numerous health benefits, is a key agricultural product of North-East India, particularly from states like Assam, Meghalaya, Mizoram, and Sikkim. The region is recognized globally for producing high-quality ginger with strong aromatic and medicinal properties, making it an essential spice for culinary and therapeutic use around the world.
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Characteristics</h3>
                            <p>
                                1.Aroma and Flavor: North-East Indian ginger is distinguished by its robust aroma and strong, spicy flavor. It has a sharp, zesty bite that elevates the taste of both sweet and savory dishes.
                            </p>
                            <p>
                                2.Varieties: The region produces several varieties of ginger, with each state having its distinct features. Some of the most prominent types include Nadia Ginger from Assam, known for its high oil content and intense flavor, and Mizoram Ginger, which is popular for its freshness and potency.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/ginger-character.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/ginger-farming.png"
                                alt="Ginger Farming Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para flex-col'>
                            <h3>Sustainable Farming Practices of Ginger</h3>
                            <p>
                                Ginger cultivation in North-East India is largely organic, relying on traditional farming methods that respect the natural environment. Small-scale farmers in the region often use eco-friendly techniques, such as intercropping with other plants and avoiding chemical fertilizers or pesticides, to produce ginger that is not only healthy but also sustainable.
                            </p>
                        </div>


                    </div>


                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Global Recognition and Export</h3>
                            <p>
                                North-East India is one of the largest producers of ginger in India, with the spice being exported to countries across Asia, Europe, and the Middle East. The quality and potency of ginger from this region have garnered international recognition, making it a valuable export product. At Kiega Exims, we support local farmers by ensuring their high-quality ginger reaches global markets, where it is in demand for both culinary and medicinal purposes.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/ginger-export.png"
                                alt="Ginger export image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                <div id='pine-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/pine-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                The North-East region of India is renowned for its lush green landscapes and rich biodiversity, providing the perfect environment for the cultivation of a wide variety of fruits. Among these, pineapple holds a prominent place, celebrated for its exceptional sweetness, juiciness, and vibrant flavor. Pineapples from the North-East, particularly from states like Assam, Meghalaya, Tripura, and Manipur, are not only popular locally but are also gaining recognition in national and international markets for their superior quality
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Varieties of Pineapple</h3>
                            <p>
                                North-East India is known for producing different varieties of pineapples, each with its unique characteristics:
                            </p>
                            <p>
                                1.Kew Pineapple: The most widely cultivated variety, Kew pineapples are large and cylindrical in shape, with a golden-yellow color when ripe. They are known for their sweet flavor, high juice content, and low acidity.
                            </p>
                            <p>
                                2.Queen Pineapple: Smaller and more aromatic, the Queen variety is highly prized for its intense sweetness and firm flesh. It is often considered one of the best-tasting pineapples in India and has been given a Geographical Indication (GI) tag for its origin from Tripura, highlighting its distinctive quality and heritage.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/pine-character.png"
                                alt="Pineapple character image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                <div id='turmeric-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/turmeric-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                Turmeric, known as the "Golden Spice," holds a special place in the agriculture and culture of North-East India. The region’s unique soil and climatic conditions make it an ideal location for cultivating some of the finest turmeric in the world. States like Assam, Meghalaya, Arunachal Pradesh, and Mizoram are recognized for their production of this vibrant yellow-orange rhizome, which is renowned for its potency, color, flavor, and medicinal properties
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <h3>Varieties of Turmeric</h3>
                            <p>
                                North-East India produces several varieties of turmeric, with two standout types gaining global recognition:
                            </p>
                            <p>
                                1.Lakadong Turmeric: Grown primarily in the Jaintia Hills of Meghalaya, Lakadong turmeric is one of the finest turmeric varieties in the world. It is prized for its high curcumin content (ranging between 7-12%), which is significantly higher than average. This gives it a stronger flavor, deeper color, and enhanced medicinal properties.
                            </p>
                            <p>
                                2.Assam Turmeric: Known for its earthy aroma and rich color, turmeric from Assam is widely used in culinary and medicinal applications. It has gained popularity for its smooth texture, mild pungency, and vibrant yellow hue.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/turmeric-vary.png"
                                alt="Turmeric variety image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/turmeric-character.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para flex-col'>
                            <h3>Characteristics</h3>
                            <p>
                                1.Color: The turmeric from North-East India is particularly valued for its deep yellow to orange color, which is richer than many other varieties. This vivid hue makes it highly sought after for use in culinary, cosmetic, and medicinal products.
                            </p>
                            <p>
                                2.Flavor: The flavor of North-East Indian turmeric is robust, warm, and slightly bitter, with a hint of earthiness. It adds a distinct taste and richness to dishes.
                            </p>
                            <p>
                                3.Curcumin Content: Curcumin, the active compound in turmeric responsible for its bright color and medicinal properties, is present in higher concentrations in North-East Indian varieties, especially in Lakadong turmeric. This makes it particularly valuable for health and wellness products.
                            </p>
                            <p>
                                Turmeric cultivation in North-East India is largely organic, with farmers adhering to traditional and sustainable farming practices. These farmers often use natural fertilizers and follow environmentally friendly methods to ensure the purity of the product. The turmeric is grown in fertile, mineral-rich soil that enhances its quality and curcumin content, making it more potent than conventional turmeric
                            </p>

                        </div>
                    </div>
                </div>

                <div id='corn-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/corn-bg-org.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para'>
                            <p>
                                Maize, commonly known as corn, is an important crop in Assam and has gained prominence in recent years as a key agricultural product in the state. With its versatile use in food, feed, and industrial applications, maize has become a vital crop for Assam's farmers, contributing to both food security and the local economy. The state's favorable climate and fertile soil provide an ideal environment for maize cultivation, leading to increased production and interest in modern farming practices.
                            </p>
                        </div>
                    </div>

                    <div className='grid-box item-details-box res-col-rev'>
                        <div className='flex-box item-detail-text-2nd ali-jus para'>
                            <p>
                                In recent years, Assam has emerged as a key player in the maize export sector, driven by increasing production, improved farming practices, and growing demand for the crop in international markets. Traditionally cultivated for domestic consumption and animal feed, maize from Assam is now gaining recognition as an export commodity, thanks to its high quality and versatility in food processing, feed, and industrial applications.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/maize-2nd.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                {/* global market section */}

                <div id='corn-section'>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNPage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>

                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNPage/17.png"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='item-detail-text flex-box ali-jus para flex-col'>
                            <h3 className="courgette-regular">Global Market Reach</h3>
                            <p>
                                <strong>Kiega Exims</strong> is at the forefront of connecting the world to the pristine horticultural products of <strong>North-East India</strong>. Our produce, cultivated with care and adherence to international standards, is carefully harvested and prepared for export, ensuring that the unique flavors and nutritional benefits of the region reach global consumers in the freshest possible condition.
                                With the natural abundance of <strong>North-East India</strong> and our commitment to nurturing local farmers, we bring the best of this rich horticultural heritage to your table.
                            </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SourceNortheastPage