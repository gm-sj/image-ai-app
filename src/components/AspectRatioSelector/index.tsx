import React from 'react';
import { SelectorStyle } from './Styled';

interface AspectRatioSelectorProps {
  setAspectRatio: (ratio: string, height: string) => void;
}

const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ setAspectRatio }) => {
  return (
    <SelectorStyle>
      <button onClick={() => setAspectRatio('1/1', '100%')}>1:1</button>
      <button onClick={() => setAspectRatio('9/16', '70vh')}>9:16</button>
      <button onClick={() => setAspectRatio('16/9', '100%')}>16:9</button>
    </SelectorStyle>
  );
};

export default AspectRatioSelector;
