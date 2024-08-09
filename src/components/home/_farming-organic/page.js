import './farming-organic.css';

export default function FarmingOrganic(){
    return (
        <>
            <div className="farming-organic-container section-divider">
                <div className='background'>
                    <img src="/assets/farming-with-love.png" alt="background Image"/>
                </div>
                <div className='content-area'>
                    <div className='farming-girl-img-container'>
                        <img src="/assets/farming-girl.png" alt="Farming Girl Image" />
                    </div>
                    <div className='text-button-area'>
                        <h4>Farming with love</h4>
                        <h2>Organic & healthy fresh food provider</h2>
                        <button className='btn btn-md btn-primary'>The Natural Product</button>
                        <button className='btn btn-md btn-success'>The Organic products</button>
                        <h5>We connect buyers and sellers of natural, are so beguiled
                        demoralized charms of pleasure.</h5>
                        <p>Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id quam sed eros 
                            tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
                        </p>
                    </div>  
                </div>
            </div>
        </>
    )
}