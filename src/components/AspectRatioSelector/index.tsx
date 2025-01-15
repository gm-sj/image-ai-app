import React from 'react';
import { SelectorStyle } from './Styled';

interface AspectRatioSelectorProps {
  setAspectRatio: (newAspectRatio: string) => void;
  aspectRatio: string;
}

const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({
  aspectRatio,
  setAspectRatio,
}) => {
  return (
    <SelectorStyle>
      <button
        onClick={() => setAspectRatio('1/1')}
        className={aspectRatio === '1/1' ? 'active' : ''}
      >
        1:1
      </button>
      <button
        onClick={() => setAspectRatio('9/16')}
        className={aspectRatio === '9/16' ? 'active' : ''}
      >
        9:16
      </button>
      <button
        onClick={() => setAspectRatio('16/9')}
        className={aspectRatio === '16/9' ? 'active' : ''}
      >
        16:9
      </button>
    </SelectorStyle>
  );
};

export default AspectRatioSelector;
