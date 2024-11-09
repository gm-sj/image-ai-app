// PromptInput.tsx
import React, { useState } from 'react';
import { PromptInputStyle } from './Styled';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import AspectRatioSelector from '../AspectRatioSelector';
import styled from 'styled-components';

interface PromptInputProps {
  aspectRatio: string;
}

const ModalStyle = styled(Dialog)`
  .MuiPaper-root {
    background-color: #ffffff !important;
    margin: 0;
    height: 100vh;
    border-radius: 20px;
    min-width: 50vw;
    max-width: 50vw;
  }
  .modal-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100%;
    .modal-contents {
      width: 100%;
      margin: 0 auto;
      .modal-img-contents {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        height: 100%;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .contents-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-top: 20px;
        p {
          font-size: 16px;
          font-weight: 700;
        }
      }
      .model-btn-wrapeer {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        button {
          min-width: 10vw;
          max-width: 15vw;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: 700;
          cursor: pointer;
          &.modal-btn-skyblue {
            background-color: var(--skyblue-color);
            color: var(--white-color);
          }
          &.modal-btn-blue {
            background-color: var(--blue-color);
            color: var(--white-color);
          }
          &.modal-btn-white {
            background-color: var(--white-color);
            color: var(--black-color);
            border: 1px solid var(--gray-color);
          }
        }
      }
    }
  }
`;

const PromptInput: React.FC<PromptInputProps> = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<string>('1/1'); // 비율 상태 추가

  const fetchImage = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setIsDialogOpen(true);
      const response = await fetch(
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`,
      );
      if (!response.ok) throw new Error('Failed to fetch image');
      setImageUrl(response.url);
    } catch (error) {
      console.error(error);
      setImageUrl('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setImageUrl('');
  };

  return (
    <PromptInputStyle>
      <div className="input-contents-wrapper">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="AI가 생성할 내용에 대한 설명을 입력하세요"
        />
        <button onClick={fetchImage} type="submit">
          생성하기
        </button>
      </div>

      <ModalStyle
        open={isDialogOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <div className="modal-wrapper">
          {isLoading ? (
            <CircularProgress sx={{ color: '005bea' }} />
          ) : (
            <div className="modal-contents">
              <div className="modal-img-contents">
                <img src={imageUrl} alt="Generated" style={{ aspectRatio: aspectRatio }} />
              </div>
              <div className="contents-text">
                <p>
                  이미지가 완성 되었습니다.
                  <br />
                  버튼을 눌러 비율을 맞춰주세요
                </p>
                <AspectRatioSelector setAspectRatio={setAspectRatio} />
              </div>
              <div className="model-btn-wrapeer">
                <button className="modal-btn-skyblue">메인에 업로드</button>
                <button className="modal-btn-blue">다운로드</button>
                <button className="modal-btn-white" onClick={handleClose}>
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      </ModalStyle>
    </PromptInputStyle>
  );
};

export default PromptInput;
