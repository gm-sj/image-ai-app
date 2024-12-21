import React, { useState } from 'react';
import { OptionStyld } from './Styled';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface OptionProps {
  setAspectRatio: (ratio: string) => void;
  onPromptGenerated: (prompt: string) => void;
}

const Option: React.FC<OptionProps> = ({ onPromptGenerated }) => {
  const [activeImageCount, setActiveImageCount] = useState<number | null>(null);

  const fetchPromptFromGoogleAI = async () => {
    try {
      const genAI = new GoogleGenerativeAI('');
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash', // 사용할 모델
      });

      const prompt = 'AI가 이미지를 생성할 명령어를 추천해주세요.';
      const result = await model.generateContent(prompt);

      const generatedPrompt = result.response.text(); // 생성된 텍스트
      console.log('추천 프롬프트:', generatedPrompt);

      // 부모 컴포넌트로 전달
      onPromptGenerated(generatedPrompt);
    } catch (error) {
      console.error('Google Generative AI 오류:', error);
    }
  };

  return (
    <OptionStyld>
      <div className="option-wrapper">
        <button className="select-item img-upload" onClick={fetchPromptFromGoogleAI}>
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
