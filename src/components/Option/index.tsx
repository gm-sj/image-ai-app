import React, { useState } from 'react';
import { OptionStyld } from './Styled';

interface OptionProps {
  setAspectRatio: (ratio: string) => void;
}

const Option: React.FC<OptionProps> = ({ setAspectRatio }) => {
  const [activeScreenRatio, setActiveScreenRatio] = useState<string | null>(null);
  const [activeImageCount, setActiveImageCount] = useState<number | null>(null);

  const handleScreenRatioClick = (ratio: string) => {
    setActiveScreenRatio(ratio);
    setAspectRatio(ratio);
  };

  return (
    <OptionStyld>
      <div className="option-wrapper">
        <button className="select-item img-upload">
          <span>프롬프트 추천</span>
        </button>
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
