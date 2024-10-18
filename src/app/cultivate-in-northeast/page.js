import Image from 'next/image'
import './cin.css'

function CultivateInNortheast() {
    return (
        <>
            <section className='cin-section'>
                <div className='cin-hero-img'>
                    <Image
                        src='/assets/CINPage/cin-hero-img.png'
                        alt='Cultivate in northeast Image'
                        width={800}
                        height={500}

                    />
                </div>
            </section>

            <section className='cin-about-section'>
                <div className='grid-box res-flex res-col-rev cin-desc'>
                    <div className='desc-text para desc-down'>
                        <p>
                            We at <strong>Kiega Exims</strong> provide Contractual Farming Services for food companies in India and from abroad. With a grower base of more than 8000 skilled farmers and <strong>13,500 hectares</strong> of fertile farming land available, we are one of the largest and most professional farming support providers in <strong>North-East and India</strong>.
                        </p>
                    </div>
                    <div className='desc-img flex-box ali-jus'>
                        <Image
                            src='/assets/CINPage/desc.png'
                            alt='Cultivate in northeast Image'
                            height={400}
                            width={400}

                        />
                    </div>
                </div>

                <div className='grid-box res-flex cin-desc'>
                    <div className='round-box flex-box ali-jus'>
                        <Image
                            src='/assets/CINPage/21.png'
                            alt='Cultivate in northeast Image'
                            height={400}
                            width={400}

                        />
                    </div>

                    <div className='desc-text para'>
                        <div>
                            <h3 className='h3'>Why cultivate in North-East India?</h3>
                            <ul className='list-items'>
                                <li>Fertile land</li>
                                <li>Available manpower</li>
                                <li>Supporting government policies</li>
                                <li>Suitable weather condition for farming</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='h3'>Why choose KIEGA EXIMS ?</h3>
                            <ul className='list-items'>
                                <li>Guaranteed quality production</li>
                                <li>Geo-tagged farming</li>
                                <li>Updated farming techniques</li>
                                <li>Use of certified quality seeds</li>
                                <li>AI powered progress monitoring systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CultivateInNortheast