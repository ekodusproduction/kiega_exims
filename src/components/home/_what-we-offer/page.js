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
                        {/* <div className='card-content'>
                            <h4>Vegetables</h4>
                            <p>When nothing prevents our to we like best be</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}