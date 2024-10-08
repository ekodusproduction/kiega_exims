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
                    src="/assets/SNpage/SN-header.png"
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
                    imgsrc: '2.png',
                    name: "King Chilli"
                },
                {
                    id: 2,
                    imgsrc: '3.png',
                    name: "Kaji Lemon"
                },
                {
                    id: 3,
                    imgsrc: '4.png',
                    name: "Ginger"
                },
                {
                    id: 4,
                    imgsrc: '5.png',
                    name: "Pineapple"
                },
                {
                    id: 5,
                    imgsrc: '6.png',
                    name: "Turmeric"
                },
                {
                    id: 6,
                    imgsrc: '7.png',
                    name: "Corn"
                },
            ]} />

            {/* item details */}

            <section className='item-details-section'>
                <div>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNpage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNpage/3.png"
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
                                <strong>Bhut Jolokia</strong>, also known as King Chilli or Ghost Pepper, is one of the spiciest chilies in the world, originating from the lush, <strong>tropical regions</strong> of North-East India, particularly <strong>Assam</strong>, <strong>Nagaland</strong>, and <strong>Manipur</strong>. This fiery chili has earned global recognition for its intense heat and unique flavor, making it both a culinary marvel and a cultural icon.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNpage/chilly-details.PNG"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='line-box flex-box ali-jus'>
                        <Image
                            src="/assets/SNpage/line.png"
                            alt="Separation line"
                            width={800}
                            height={300}
                        />
                    </div>
                    <div className='grid-box item-details-box'>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNpage/chilly-details.PNG"
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
                                <strong>Bhut Jolokia</strong>, also known as King Chilli or Ghost Pepper, is one of the spiciest chilies in the world, originating from the lush, <strong>tropical regions</strong> of North-East India, particularly <strong>Assam</strong>, <strong>Nagaland</strong>, and <strong>Manipur</strong>. This fiery chili has earned global recognition for its intense heat and unique flavor, making it both a culinary marvel and a cultural icon.
                            </p>
                        </div>
                        <div className='item-image flex-box ali-jus'>
                            <Image
                                src="/assets/SNpage/chilly-details.PNG"
                                alt="King Chilly Image"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SourceNortheastPage