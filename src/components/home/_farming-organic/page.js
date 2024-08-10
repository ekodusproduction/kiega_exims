import './farming-organic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
                        <div className='button-groups'>
                            <button className='btn btn-md btn-primary natural'><FontAwesomeIcon icon={faCheckCircle} style={{marginRight:"5", fontSize:"20"}}/>The Natural Products</button>
                            <button className='btn btn-md btn-success organic'><FontAwesomeIcon icon={faCheckCircle} style={{marginRight:"5", fontSize:"20"}}/>The Organic products</button>
                        </div>
                        
                        <h5>We connect buyers and sellers of natural, are so beguiled
                        demoralized charms of pleasure.</h5>
                        <p>Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id quam sed eros 
                            tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
                        </p>
                    </div>  
                </div>
                <div className='farming-organic-top-design'>
                   <img src="/assets/farming-organic-top-design.png" alt="farming organic top design"/>
                </div>
                <div className='farming-organic-footer'>
                    <img src="/assets/veg-busket.png" alt="veg busket"/>
                    <h4>Every day fresh and quality products<br/>
                    for you deliver at doorstep</h4>
                </div>
            </div>
        </>
    )
}