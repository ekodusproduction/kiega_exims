import './footer.css';

export default function Footer(){
    return (
        <>
            <div className='footer-container'>
                <div className='footer-bg'>
                    <img src="/assets/footer-bg.png" alt="footer bg" />
                </div>
                <div className='footer-content'>
                    <div className='footer-logo'>
                        <img src="/assets/kiega-logo-white.png" alt="footer kiega logo"/>
                        <h6>We provide Fresh Organic fruits <br /> and vegetable</h6>
                        <div className='social-media-links'>
                            <i class='bx bxl-facebook-circle'></i>
                            <i class='bx bxl-twitter' ></i>
                            <i class='bx bxl-instagram'></i>
                        </div>
                    </div>
                    <div className='footer-links'>
                        <h5>Explore</h5>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>North-East Source</li>
                            <li>Social Impact</li>
                            <li>Contractual Farming</li>
                        </ul>
                    </div>

                    <div className='footer-contact-us'>
                        <h5>Contact Us</h5>
                        <p>
                            <i className='bx bx-phone-call'></i>
                            +91 789-745-7896
                        </p>
                        <p style={{marginLeft:'20px'}}>
                            <i class='bx bx-mail-send' ></i>
                            info@kiegaexims.com
                        </p>

                        <div className='sign-in'>
                            <h5>Sign In</h5>
                            <p>
                                <i class='bx bx-log-in-circle' ></i>
                                Customer Log In
                            </p>
                        </div>
                    </div>
                    <div className='footer-gallery'>
                        <h5>Gallery</h5>
                        <img src="/assets/gallery.png" alt="footer gallery" />
                    </div>
                </div>
                
            </div>
        </>
    )
}