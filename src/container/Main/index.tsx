import React, { useState, useEffect } from 'react';
import { MainStyle } from './Styled';

const Main: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeScreenRatio, setActiveScreenRatio] = useState<string | null>(null);
    const [activeImageCount, setActiveImageCount] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState('tab1');

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
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
                            <div
                                className={`ratio-item ${activeScreenRatio === '1:1' ? 'active' : ''}`}
                                onClick={() => setActiveScreenRatio('1:1')}
                            >
                                1:1
                            </div>
                            <div
                                className={`ratio-item ${activeScreenRatio === '2:3' ? 'active' : ''}`}
                                onClick={() => setActiveScreenRatio('2:3')}
                            >
                                2:3
                            </div>
                            <div
                                className={`ratio-item ${activeScreenRatio === '3:2' ? 'active' : ''}`}
                                onClick={() => setActiveScreenRatio('3:2')}
                            >
                                3:2
                            </div>
                        </div>
                        <div className="select-item img-pcs">
                            이미지갯수
                            <div
                                className={`ratio-item ${activeImageCount === 1 ? 'active' : ''}`}
                                onClick={() => setActiveImageCount(1)}
                            >
                                1
                            </div>
                            <div
                                className={`ratio-item ${activeImageCount === 2 ? 'active' : ''}`}
                                onClick={() => setActiveImageCount(2)}
                            >
                                2
                            </div>
                            <div
                                className={`ratio-item ${activeImageCount === 3 ? 'active' : ''}`}
                                onClick={() => setActiveImageCount(3)}
                            >
                                3
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contents grid-section">
                    <div className="tab-menu">
                        <div className="tabs">
                            <button
                                className={`tab-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Tab
                            </button>
                            <button
                                className={`tab-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Tab
                            </button>
                            <button
                                className={`tab-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab3')}
                            >
                                Tab
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'tab1' && (
                                <div className="tab-pane">
                                    <div className="grid-container">
                                        <div className="grid-item item1">탭1입니다</div>
                                        <div className="grid-item item2"></div>
                                        <div className="grid-item item3"></div>
                                        <div className="grid-item item4"></div>
                                        <div className="grid-item item5"></div>
                                        <div className="grid-item item6"></div>
                                        <div className="grid-item item7"></div>
                                        <div className="grid-item item8"></div>
                                        <div className="grid-item item9"></div>
                                        <div className="grid-item item10"></div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div className="tab-pane">
                                    <div className="grid-container">
                                        <div className="grid-item item1">탭2입니다</div>
                                        <div className="grid-item item2"></div>
                                        <div className="grid-item item3"></div>
                                        <div className="grid-item item4"></div>
                                        <div className="grid-item item5"></div>
                                        <div className="grid-item item6"></div>
                                        <div className="grid-item item7"></div>
                                        <div className="grid-item item8"></div>
                                        <div className="grid-item item9"></div>
                                        <div className="grid-item item10"></div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'tab3' && (
                                <div className="tab-pane">
                                    <div className="grid-container">
                                        <div className="grid-item item1">탭3입니다</div>
                                        <div className="grid-item item2"></div>
                                        <div className="grid-item item3"></div>
                                        <div className="grid-item item4"></div>
                                        <div className="grid-item item5"></div>
                                        <div className="grid-item item6"></div>
                                        <div className="grid-item item7"></div>
                                        <div className="grid-item item8"></div>
                                        <div className="grid-item item9"></div>
                                        <div className="grid-item item10"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
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
        </MainStyle>
    );
};

export default Main;
