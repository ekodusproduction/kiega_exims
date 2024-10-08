import Image from 'next/image'
import './category.css'

export default function Category({ dataArr }) {
    console.log('dataArr---', dataArr)
    return (
        <>
            <section className='sn-category'>
                <div className='grid-box sn-items'>
                    {
                        dataArr && dataArr.map((el) => (
                            <div className='flex-box sn-item-per alignItems justifyItems'>
                                <div>
                                    <Image
                                        src={`/assets/SNpage/${el.imgsrc}`}
                                        alt="King Chilly Image"
                                        width={250}
                                        height={250}
                                    />
                                </div>
                                <div className='para'>
                                    <p style={{ fontWeight: '700' }}>{el.name}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    )
}
