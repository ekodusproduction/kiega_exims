import Image from 'next/image'
import './category.css'
import Link from 'next/link'

export default function Category({ dataArr }) {
    return (
        <>
            <section className='sn-category'>
                <div className='grid-box sn-items'>
                    {
                        dataArr && dataArr.map((el, ind) => (
                            <Link key={ind} href={`#${el.sectionId ? el.sectionId : ''}`} className="dropdown-item">
                                <div className='flex-box sn-item-per alignItems justifyItems'>
                                    <div>
                                        <Image
                                            src={`/${el.imgsrc}`}
                                            alt="King Chilly Image"
                                            width={250}
                                            height={250}
                                        />
                                    </div>
                                    <div className='para'>
                                        <p style={{ fontWeight: '700' }}>{el.name}</p>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }
                </div>
            </section>
        </>
    )
}
