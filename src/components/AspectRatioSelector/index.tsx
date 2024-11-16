import { SelectorStyle } from './Styled';
interface OptionProps {
  setAspectRatio: (newAspectRatio: string) => void;
}

const Option: React.FC<OptionProps> = ({ setAspectRatio }) => {
  return (
    <SelectorStyle>
      <button onClick={() => setAspectRatio('1/1')}>1:1</button>
      <button onClick={() => setAspectRatio('9/16')}>9:16</button>
      <button onClick={() => setAspectRatio('16/9')}>16:9</button>
    </SelectorStyle>
  );
};

export default Option;
