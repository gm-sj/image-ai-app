import React, { useState, useEffect } from 'react';
import { MainStyle } from './Styled';

const Main: React.FC = () => {
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
        <MainStyle>
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

            <main>
                <section className="contents">
                    <div className="main-title-wrraper">
                        <h2>AI 이미지 생성 프로젝트</h2>
                        <p>해당 입력칸에 명령어를 입력하여 이미지를 생성해보세요.</p>
                    </div>

                    <div className="input-contents-wrraper">
                        <textarea placeholder="AI가 생성할 내용에 대한 설명을 입력하세요" />
                        <button type="submit">생성하기</button>
                    </div>

                    <div className="option-wrraper">
                        <div className="select-item img-upload">
                            <span className="item-select"></span>
                            <span>이미지 업로드</span>
                            <div className="upload-btn">
                                <label htmlFor="img-upload-btn">11111</label>
                                <input id="img-upload-btn" type="file" />
                            </div>
                        </div>
                        <div className="select-item screensize">
                            화면비율
                            <div className="ratio-item active">
                                <span></span>
                                1:1
                            </div>
                            <div className="ratio-item">
                                <span></span>
                                2:3
                            </div>
                            <div className="ratio-item">
                                <span></span>
                                3:2
                            </div>
                        </div>
                        <div className="select-item img-pcs">
                            이미지갯수
                            <div className="ratio-item active">1</div>
                            <div className="ratio-item">2</div>
                            <div className="ratio-item">3</div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div></div>
                <div></div>
            </footer>
        </MainStyle>
    );
};

export default Main;
