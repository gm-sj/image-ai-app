import React, { useState, useEffect } from 'react';
import { HeaderStyle } from './Styled';

const Headers: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderStyle>
            <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
                <div className="menu-item-wrapper">
                    <div className="title-wrapper">
                        <h1>로고</h1>
                    </div>

                    <nav className="web-nav-list-wrapper">
                        <ul>
                            <li>best</li>
                            <li>worst</li>
                            <li>top5</li>
                        </ul>
                    </nav>
                    <nav className="mobile-nav-list-wrapper">
                        <div className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={`menu-area ${isMenuOpen ? 'open' : ''}`}>
                            <li>best</li>
                            <li>worst</li>
                            <li>top5</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderStyle>
    );
};

export default Headers;
