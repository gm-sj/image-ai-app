import React, { useState } from 'react';
import { OptionStyld } from './Styled';
const Option: React.FC = () => {
    const [activeScreenRatio, setActiveScreenRatio] = useState<string | null>(null);
    const [activeImageCount, setActiveImageCount] = useState<number | null>(null);

    return (
        <OptionStyld>
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
        </OptionStyld>
    );
};

export default Option;
