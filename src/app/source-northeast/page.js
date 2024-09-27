import Image from 'next/image'
import React from 'react'
import './snpage.css'

function SourceNortheastPage() {
    return (
        <div>
            <div>
                <Image
                    src="/assets/SNpage/SN-header.png"
                    alt="Source page heade Image"
                    width={1200}
                    height={800}
                    style={{ width: "100vw", height: 'auto', marginTop: 0 }}
                />
            </div>
            <div className='sn-hero-content'>
                <div className='sn-hero-text'>
                    <p>
                        The North-East region of India is a treasure trove of diverse and exotic horticultural products. Blessed with fertile soils, a unique climate, and lush landscapes, this region has become a hub for a wide array of fruits, vegetables, spices, and flowers that are grown organically and sustainably. Here at Kiega Exims, we are proud to showcase the vibrant produce from this remarkable area.
                    </p>
                </div>
                <div className=''>
                    <Image
                        src="/assets/SNpage/map.PNG"
                        alt="Source page heade Image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default SourceNortheastPage