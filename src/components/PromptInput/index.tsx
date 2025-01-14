import React, { useState, useEffect } from 'react';
import { PromptInputStyle } from './Styled';
import SendImage from '../Modal/Send';
import useModal from '../../hooks/useModal';

interface PromptInputProps {
  aspectRatio: string;
  setAspectRatio: (newAspectRatio: string) => void; // 수정된 타입
  generatedPrompt?: string;
}

const PromptInput: React.FC<PromptInputProps> = ({
  aspectRatio,
  setAspectRatio,
  generatedPrompt = '',
}) => {
  const [prompt, setPrompt] = useState<string>(generatedPrompt);
  const { openModal } = useModal();

  useEffect(() => {
    if (generatedPrompt && generatedPrompt !== prompt) {
      setPrompt(generatedPrompt);
      console.log('Generated Prompt:', generatedPrompt);
    }
  }, [generatedPrompt]);

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
      component: (
        <SendImage
          fetchImage={fetchImage}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio} // 부모에서 전달받은 함수 전달
        />
      ),
    });
  };

  return (
    <PromptInputStyle>
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
