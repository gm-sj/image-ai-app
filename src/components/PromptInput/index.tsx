import React from 'react';
import { PromptInputStyle } from './Styled';

const PromptInput: React.FC = () => {
    return (
        <PromptInputStyle>
            <div className="input-contents-wrraper">
                <textarea placeholder="AI가 생성할 내용에 대한 설명을 입력하세요" />
                <button type="submit">생성하기</button>
            </div>
        </PromptInputStyle>
    );
};

export default PromptInput;
