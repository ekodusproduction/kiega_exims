'use client'
import { useState } from 'react'
import './headercss.css'
import Link from 'next/link';

function HeaderMain() {
    const [menu, setmenu] = useState(false)

    function toggleMenu() {
        setmenu(!menu)
    }

    return (
        <>
            <div className='mainheader'>
                <div className='header-logo'>
                    <div className="small-logo-area">
                        <Link href="/">
                            <img src="/assets/small-logo.png" alt="kiega logo" />
                        </Link>
                    </div>
                    <div className='icon-header' onClick={toggleMenu}> <i className="bx bx-menu"></i></div>
                </div>
                <div className={`menu-list-container ${menu ? '' : 'hidden'}`}>
                    <ul>
                        <li>
                            <Link href="/" className="dropdown-item" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>                        
                        <li>
                            <Link href="/fruit" className="dropdown-item" onClick={toggleMenu}>
                                Fruits
                            </Link>
                        </li>
                        <li>
                            <Link href="/vegetable" className="dropdown-item" onClick={toggleMenu}>
                                Vegatables
                            </Link>
                        </li>
                        <li>
                            <Link href="/riceandcorn" className="dropdown-item" onClick={toggleMenu}>
                                Rice and Corn
                            </Link>
                        </li>
                        <li>
                            <Link href="/source-northeast" className="dropdown-item" onClick={toggleMenu}>
                                Source from Northeast
                            </Link>
                        </li>
                        <li>
                            <Link href="/social-impact" className="dropdown-item" onClick={toggleMenu}>
                                Social Impact
                            </Link>
                        </li>
                        <li>
                            <Link href="/cultivate-in-northeast" className="dropdown-item" onClick={toggleMenu}>
                                Cultivate in Northeast
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="dropdown-item" onClick={toggleMenu}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderMain