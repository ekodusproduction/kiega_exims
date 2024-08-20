import './about_us.css';

export default function AboutUs(){
    return (
        <>
            <div className='about-us-container section-divider'>
                <div className='about-us-top-img'>
                    <img src="/assets/about-us-header-img.png" alt="about us header image" />
                </div>
                <div className='heading'>
                    <h4>ABOUT US</h4>
                </div>
                <div className='about-us-content'>
                    <h6>Welcome To</h6>
                    <h4>Kiega Exims Pvt. Ltd.</h4>
                    <p>
                        <strong>Kiega Exims</strong>, incorporated in 2018 as an independent company headquartered in Assam, India. 
                        We are exporter & importer of agricultural products. <strong>Kiega Exims</strong> understands that in a 
                        world of incessantly growing population across the globe, the need of food quantum is 
                        also growing parallelly. we started in 2018 with a group of just 20 farmers that grew 
                        Indian Beans for the export market in UK. And today, we are a team of more than 5000 
                        small-scale farmers/growers that grows a wide variety of products and supplies to our clients 
                        spread across the Europe and the Gulf. We are the largest and the first ever company in entire 
                        North-east India to export fresh fruits & vegetables to destinations such as <strong>London, Frankfurt, Rome,
                        Birmingham, Dubai, Qatar & Saudi Arabia</strong>.
                    </p>

                    <div className='about-us-map'>
                        <img src="/assets/about-us-map.png" alt="about us map"/>
                    </div>
                </div>

                <div className='heading'>
                    <h4>OUR MISSION</h4>
                </div>

                <div className='our-mission-content'>
                    <p>
                        Our mission is to meet the increasing demand of the global market by cultivating a 
                        diverse range of agricultural products and directly supplying them to high-end markets. 
                        To fulfil these demands, we have onboarded marginal small-scale farmers across North-East 
                        India on contractual basis and provided them with the required technical guidance, organic 
                        inputs, financial assistance, and market linkage. Our supply-chain is designed in a way that 
                        the benefits directly go to the growers/farmers, by eliminating the middlemen concept. We 
                        here at <strong>Kiega Exims</strong>, strictly follow the <strong>Demand Oriented Production</strong> or 
                        <strong> Market Oriented Production</strong> method which minimizes the chance of wastage 
                        due to the products not being sold. Along with creating a reliable and efficient supply 
                        chain we are also committed in uplifting the small-scale marginal farmers from economic 
                        backwardness. We are on a mission to put an impact on their lives by empowering them 
                        through sustainable farming.
                    </p>
                </div>

                <div className='heading'>
                    <h4>OUR VISION</h4>
                </div>

                <div className='our-vision-content'>
                    <p>
                        Our vision is to reach out to as many small-scale farmers possible in the <strong>North-East</strong> region 
                        and draw them out of the economic backwardness and engage them in sustainable agricultural   
                        activities to live a healthy and dignified life. This in turn will ensure reliable, efficient 
                        and consistent supply of organic food products to the <strong>Global Market</strong>. 
                    </p>
                    <img src="/assets/our-vision-side-img.png" alt="our vision side image"/>
                </div>
            </div>
        </>
    )
}