import React, { useState, useEffect } from 'react';
import { PromptInputStyle } from './Styled';
import SendImage from '../Modal/Send';
import useModal from '../../hooks/useModal';
import { useDeviceType } from '../../hooks/useDeviceType';

interface PromptInputProps {
  generatedPrompt?: string;
}

const PromptInput: React.FC<PromptInputProps> = ({ generatedPrompt = '' }) => {
  const [prompt, setPrompt] = useState<string>(generatedPrompt);
  const { deviceType } = useDeviceType();
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (generatedPrompt && generatedPrompt !== prompt) {
      setPrompt(generatedPrompt);
      console.log('Generated Prompt:', generatedPrompt);
    }
  }, [generatedPrompt]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchImage = async (setImageUrl: (url: string) => void): Promise<void> => {
    try {
      const response = await fetch(
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`,
      );
      if (!response.ok) throw new Error('Failed to fetch image');
      const url = response.url;
      setImageUrl(url);
      console.log('Fetched Image URL:', url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const handleSubmitButton = (): void => {
    openModal({
      id: 'SendImageModal',
      // deviceType 전달
      component: <SendImage fetchImage={fetchImage} deviceType={deviceType} prompt={prompt} />,
    });
  };

  return (
    <PromptInputStyle deviceType={deviceType} isVisible={isVisible}>
      <div className="input-contents-wrapper">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.ctrlKey) {
              e.preventDefault();
              handleSubmitButton();
            } else if (e.key === 'Enter' && e.ctrlKey) {
              setPrompt((prev) => prev + '\n');
            }
          }}
          placeholder="AI가 생성할 내용에 대한 설명을 입력하세요"
        />
        <button onClick={handleSubmitButton} type="button">
          생성하기
        </button>
      </div>
    </PromptInputStyle>
  );
};

export default PromptInput;
