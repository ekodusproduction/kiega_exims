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
                        <div className="dropdown">
                            <a className="btn btn-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bx bx-menu"></i>
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}