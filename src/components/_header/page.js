import './header.css';

export default function Header(){
    return (
        <div className='header-container'>
            <div className='header-nav'>
                <div className='header-items'>
                    <div className='small-logo-area'>
                        <img src="/assets/small-logo.png" alt="kiega logo"/>
                    </div>
                    <div className='header-nav-menu'>
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </div>
        </div>
       
    )
}