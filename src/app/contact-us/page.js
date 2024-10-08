import Image from 'next/image'
import './contact-us.css'


function ContactUsPage() {
    return (
        <section className="contact-us-section">
            <div className='image'>
                <Image
                    src='/assets/contact-us/contact-bg.png'
                    alt='bg-image'
                    height={1200}
                    width={1000}
                />
            </div>
            <div className='form-container'>
                <div className='logo-box'>
                    <div className='logo-bg flex-box ali-jus'>
                        <Image
                            src='/assets/small-logo.png'
                            alt="kiega logo"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
                <div className='contact-form flex alijus'>
                    <div>
                        <label htmlFor="name">Your name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="name">Your email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="name">Your Telephone</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="name">Comment</label>
                        <input type="text" />
                    </div>
                    <button>Submit</button>
                </div>

            </div>
        </section>


    )
}

export default ContactUsPage