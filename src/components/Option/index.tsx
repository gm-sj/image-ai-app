import React, { useState } from 'react';
import { OptionStyld } from './Styled';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface OptionProps {
  onPromptGenerated: (prompt: string) => void;
}

const Option: React.FC<OptionProps> = ({ onPromptGenerated }) => {
  const [activeImageCount, setActiveImageCount] = useState<number | null>(null);

  const fetchPromptFromGoogleAI = async () => {
    const API_KEY = '';

    if (!API_KEY) {
      console.error('API 키가 설정되지 않았습니다.');
      onPromptGenerated('프롬프트를 불러올 수 없습니다.');
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
      });

      const prompt =
        'Make a short and creative prompt for AI image generation. Just give me the result value instead ,all korean only text';
      const result = await model.generateContent(prompt);

      const generatedPrompt = result.response.text();
      console.log('추천 프롬프트:', generatedPrompt);

      onPromptGenerated(generatedPrompt);
    } catch (error) {
      const fallbackPrompt = '프롬프트를 불러올 수 없습니다.';
      console.error('Google Generative AI 오류:', error);
      console.log(fallbackPrompt);

      onPromptGenerated(fallbackPrompt);
    }
  };

  return (
    <OptionStyld>
      <div className="option-wrapper">
        <button className="select-item img-upload" onClick={fetchPromptFromGoogleAI}>
          <span>프롬프트 추천</span>
        </button>
      </div>
    </OptionStyld>
  );
};

export default Option;
