import React, { useState } from 'react';
import { ImageViewStyle } from './Styled';

const ImageView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <ImageViewStyle>
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
    </ImageViewStyle>
  );
};

export default ImageView;
