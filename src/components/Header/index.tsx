import React, { useState, useEffect } from 'react';
import { HeaderStyle } from './Styled';

// image

import Logo from '../../common/images/logo.png';

const Headers: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
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
            <img src={Logo} width={130} height={50} />
          </div>

          <nav className="web-nav-list-wrapper" />
          <nav className="mobile-nav-list-wrapper" />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Headers;
