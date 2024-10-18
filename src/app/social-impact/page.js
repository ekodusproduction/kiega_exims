import Image from "next/image";
import './si.css'

function SocialImpact() {
    return (
        <>
            <section className='si-hero-section'>
                <Image
                    src='/assets/SIPage/social-impact-hero.png'
                    alt='Social Imapact header Image'
                    height={800}
                    width={1200}
                />
            </section>

            <section className='si-content-section'>
                <div className='grid-box res-flex si-content'>
                    <div className='content-img'>
                        <div className='bg-img'>
                            <Image
                                className='bg-img'
                                src='/assets/SIPage/bg.png'
                                alt='Social Imapact header Image'
                                height={700}
                                width={600}
                            />
                            <Image
                                className='old-man-img'
                                src='/assets/SIPage/old-man.png'
                                alt='Social Imapact header Image'
                                height={750}
                                width={700}
                            />
                        </div>
                    </div>
                    <div className='content-text'>
                        <p className='para mt3'>
                            At <strong>Kiega Exims</strong>, our guiding principle is to create a lasting impact on the lives of small-scale farmers, which in turn contributes to the development of the entire region. Our mission goes beyond <strong>supplying organic and healthy products</strong> to the global market; it's about uplifting the livelihoods of farmers and their families.
                        </p>
                        <p className='para'>
                            We take pride in being the first company to introduce the export of fresh fruits and vegetables from the <strong>North-East India</strong> region. By offering training and support, we have helped marginalized farmers transform into successful commercial producers who meet international standards, enabling them to share their harvest with the world. At Kiega Exims, our growth story is inseparable from the progress of our farmers and their communities.

                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialImpact;