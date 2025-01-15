import React, { useState, useEffect } from 'react';
import { MainStyle } from './Styled';
import Headers from '../../components/Header';
import PromptInput from '../../components/PromptInput';
import Option from '../../components/Option';
import ImageView from '../../components/imageView';
import Footer from '../../components/Footer';

import { useDeviceType } from '../../hooks/useDeviceType';

const Main: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const { deviceType } = useDeviceType();

  const handlePromptGenerated = (generatedPrompt: string) => {
    setPrompt(generatedPrompt);
  };

  return (
    <MainStyle deviceType={deviceType}>
      <Headers />
      <main>
        <section className="contents">
          <div className="main-title-wrraper">
            <h2>AI 이미지 생성 프로젝트</h2>
            <p>해당 입력칸에 명령어를 입력하여 이미지를 생성해보세요.</p>
          </div>
          <Option onPromptGenerated={handlePromptGenerated} />
          <PromptInput generatedPrompt={prompt} />
          <ImageView deviceType={deviceType} />
        </section>
      </main>
      <Footer />
    </MainStyle>
  );
};

export default Main;
