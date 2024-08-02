import './home-banner.css'; 

export default function HomeBanner() {
    return (
        <div className="banner-container">
            <div className="big-logo-area">
                <img src="/assets/big-logo.png" alt="kiega logo big" />
            </div>
            <div className="fruits-slider-container">
                <div className='fruite-slider-img-container'>
                    <img src="/assets/fruit-img-1.png" alt="kiega logo big" />
                </div>
            </div>
        </div>
    );
}
