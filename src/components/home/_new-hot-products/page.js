import './new-hot-products.css';
import Category from '@/components/_category/page';

export default function NewHotProducts() {
    return (
        <>
            {/* <div className='new-hot-products-container section-divider'>
                <div className='top-heading'>
                    <h2><span>Checkout New Products</span> <br />New hotest products available now</h2>
                </div>
                <div className='new-products-card-container'>
                    <div className='new-products-card'>
                        <img src="/assets/new-products-frame.png" alt="what we offer category card image" />
                        <div className='header-img-1'>
                            <img src="/assets/naga-chili.png"  alt="Naga chili image" />
                        </div>
                        <div className='card-content'>
                            <h5>Naga Chili</h5>
                        </div>
                    </div>
                    <div className='new-products-card'>
                        <img src="/assets/new-products-frame.png" alt="what we offer category card image" />
                        <div className='header-img-2'>
                            <img src="/assets/cut-pineapple.png"  alt="Naga chili image" />
                        </div>
                        <div className='card-content'>
                            <h5>Pineapple</h5>
                        </div>
                    </div>
                    <div className='new-products-card'>
                        <img src="/assets/new-products-frame.png" alt="what we offer category card image" />
                        <div className='header-img-3'>
                            <img src="/assets/cut-pomegranate.png"  alt="Naga chili image" />
                        </div>
                        <div className='card-content'>
                            <h5>Pomegranate</h5>
                        </div>
                    </div>
                    <div className='new-products-card'>
                        <img src="/assets/new-products-frame.png" alt="what we offer category card image" />
                        <div className='header-img-4'>
                            <img src="/assets/ridge-gourd.png"  alt="Naga chili image" />
                        </div>
                        <div className='card-content'>
                            <h5>Ridged Gourd</h5>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <Category dataArr={['2.png', '3.png', '4.png', '5.png', '6.png']} />  */}
            <Category dataArr={[
                {
                    id: 1,
                    imgsrc: '2.png',
                    name: "King Chilli"
                },
                {
                    id: 2,
                    imgsrc: '3.png',
                    name: "Kaji Lemon"
                },
                {
                    id: 3,
                    imgsrc: '4.png',
                    name: "Ginger"
                },
                {
                    id: 4,
                    imgsrc: '5.png',
                    name: "Pineapple"
                },
                {
                    id: 5,
                    imgsrc: '6.png',
                    name: "Turmeric"
                },
            ]} />
        </>
    )
}