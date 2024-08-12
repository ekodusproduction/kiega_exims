import './what-we-offer.css';

export default function WhatWeOffer(){
    return (
        <>
            <div className='what-we-offer-container section-divider'>
                <div className='top-heading'>
                    <h2><span>Our Categories</span> <br />What we’re offering to <br/> customers</h2>
                </div>
                <div className='category-cards-container'>
                    <div className='catergory-card'>
                        <img src="/assets/vegetable-skel.png" alt="what we offer category card image" />
                        <div className='header-img-1'>
                            <img src="/assets/vegetable.png"  alt="Vegetable image" />
                        </div>
                        <div className='card-content'>
                            <h5>Vegetables</h5>
                            <p>When nothing prevents our to we like best be</p>
                        </div>
                    </div>
                    <div className='catergory-card'>
                        <img src="/assets/fruits-skel.png" alt="what we offer category card image" />
                        <div className='header-img-2'>
                            <img src="/assets/fruits.png"  alt="Vegetable image" />
                        </div>
                        <div className='card-content'>
                            <h5>Fruits</h5>
                            <p>When nothing prevents our to we like best be</p>
                        </div>
                    </div>
                    <div className='catergory-card'>
                        <img src="/assets/corn-skel.png" alt="what we offer category card image" />
                        <div className='header-img-3'>
                            <img src="/assets/corn.png"  alt="Vegetable image" />
                        </div>
                        <div className='card-content'>
                            <h5>Corn</h5>
                            <p>When nothing prevents our to we like best be</p>
                        </div>
                    </div>
                    <div className='catergory-card'>
                        <img src="/assets/rice-skel.png" alt="what we offer category card image" />
                        <div className='header-img-4'>
                            <img src="/assets/rice.png"  alt="Vegetable image" />
                        </div>
                        <div className='card-content'>
                            <h5>Rice</h5>
                            <p>When nothing prevents our to we like best be</p>
                        </div>
                    </div>
                </div>

                <div className='quality-cards'>
                    <img src="/assets/healthy-products-card.png" alt="Healthy product card" />
                    <img src="/assets/quality-organic-cards.png" alt="Quality organic card" />
                </div>
            </div>
        </>
    )
}