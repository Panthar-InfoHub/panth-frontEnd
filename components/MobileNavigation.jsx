'use client'

import { useState, useEffect } from 'react'

const MobileNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='md:hidden flex' >
            <button
                className={`hamBurger w-[40px] h-[40px] z-20 relative`}
                onMouseOver={() => setIsMenuOpen(!isMenuOpen)}
            > <div className="inner"></div> </button>

            {isMenuOpen && (
                <div className='fixed inset-0 bg-black-3 z-10 flex items-center justify-center'>
                    <nav>
                        <ul className="text-white text-2xl space-y-4">
                            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                            <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default MobileNavigation
