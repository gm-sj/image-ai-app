import React, { useState, useEffect } from 'react';
import { PromptInputStyle } from './Styled';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import AspectRatioSelector from '../AspectRatioSelector';
import styled from 'styled-components';
import { uploadImageFromUrl } from '../../firebase/config';

interface PromptInputProps {
  height: string;
  aspectRatio: string;
  setAspectRatio: (newAspectRatio: string) => void;
  generatedPrompt?: string;
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
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    .modal-contents {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .modal-img-contents {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 100%;
        img {
          max-width: 100%;
          height: 50vh;
        }
      }
      .contents-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-top: 40px;
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
          border: none;
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

const PromptInput: React.FC<PromptInputProps> = ({
  aspectRatio,
  setAspectRatio,
  generatedPrompt = '',
}) => {
  const [prompt, setPrompt] = useState<string>(generatedPrompt);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // `generatedPrompt` 값이 변경되면 `prompt` 업데이트
  useEffect(() => {
    if (generatedPrompt && generatedPrompt !== prompt) {
      setPrompt(generatedPrompt);
      console.log('Generated Prompt:', generatedPrompt); // 디버깅용 콘솔 출력
    }
  }, [generatedPrompt]);

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

  const imgUpload = async () => {
    if (!imageUrl) return;

    uploadImageFromUrl(imageUrl, '테스트')
      .then(() => {
        console.log('이미지 업로드 성공2');
      })
      .catch((error) => {
        console.error('이미지 업로드 실패2:', error);
      });

    // const link = document.createElement('a');
    // link.href = imageUrl;
    // link.download = '';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const imgDownload = () => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = 'anonymous'; // CORS 설정
    img.src = imageUrl;

    img.onload = () => {
      const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // 이미지의 새 크기 계산
      const newWidth = img.width;
      const newHeight = (newWidth * heightRatio) / widthRatio;

      // 캔버스 크기 설정
      canvas.width = newWidth;
      canvas.height = newHeight;

      // 캔버스에 이미지 그리기
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      try {
        // 캔버스를 데이터 URL로 변환
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png'); // PNG 포맷으로 다운로드
        link.download = 'resized-image.png';
        link.click();
      } catch (error) {
        console.error('이미지를 다운로드하는 데 실패했습니다:', error);
      }
    };

    img.onerror = () => {
      console.error('이미지를 로드하는 데 실패했습니다.');
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault();
      fetchImage().catch((error) => console.error('Error in fetchImage:', error));
    } else if (e.key === 'Enter' && e.ctrlKey) {
      setPrompt((prev) => prev + '\n');
    }
  };

  return (
    <PromptInputStyle>
      <div className="input-contents-wrapper">
        <textarea
          value={prompt}
          onChange={(e) => {
            const newValue = e.target.value;
            setPrompt(newValue);
            console.log('Updated Prompt Value:', newValue); // 콘솔 로그로 현재 값 출력
          }}
          onKeyDown={handleKeyDown}
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
                <button className="modal-btn-skyblue" onClick={imgUpload}>
                  메인에 업로드
                </button>
                <button className="modal-btn-blue" onClick={imgDownload}>
                  다운로드
                </button>
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
