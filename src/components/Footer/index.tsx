import React from 'react';
import { FooterStyle } from './Styled';

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <footer className="footer-wrraper">
        <div className="footer-contents">
          <div className="info-area">
            <p>언어</p>
            <p>서비스 약관</p>
            <p>개인정보 처리방침</p>
          </div>
          <div className="link-area">
            <p>support@artguru.ai</p>
            <p>© 2024 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
