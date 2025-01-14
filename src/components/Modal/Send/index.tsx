import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import AspectRatioSelector from '../../AspectRatioSelector';
import { ModalWrapper, ModalContent, CommentModalStyle } from './Styled';
import { uploadImageFromUrl } from '../../../firebase/config';
import useModal from '../../../hooks/useModal';

interface ModalPageProps {
  fetchImage: (setImageUrl: (url: string) => void) => Promise<void>;
  deviceType: string;
}

const SendImage: React.FC<ModalPageProps> = ({ fetchImage }) => {
  const [aspectRatio, setAspectRatio] = useState<string>('1/1');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openSideModal, setOpenSideModal] = useState<boolean>(false);
  const { closeModal } = useModal();

  // 이미지 로드
  useEffect(() => {
    setIsLoading(true);
    fetchImage(setImageUrl)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error('Error fetching image:', error);
        setIsLoading(false);
      });
  }, [fetchImage]);

  // 비율 변경 로그 확인 (디버깅용)
  useEffect(() => {
    console.log('Updated aspectRatio:', aspectRatio);
  }, [aspectRatio]);

  const handleImgUpload = async () => {
    if (!imageUrl) return;
    try {
      await uploadImageFromUrl(imageUrl, '테스트');
      console.log('이미지 업로드 성공');
      closeModal('SendImageModal');
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handleImgDownload = () => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const newWidth = img.width;
      const newHeight = (newWidth * heightRatio) / widthRatio;

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'resized-image.png';
      link.click();
    };

    img.onerror = () => {
      console.error('이미지를 로드하는 데 실패했습니다.');
    };
  };

  const toggleModalSide = () => {
    setOpenSideModal(!openSideModal);
  };

  return (
    <ModalWrapper>
      <ModalContent openSideModal={openSideModal}>
        {isLoading ? (
          <CircularProgress sx={{ color: '#005bea' }} />
        ) : (
          <div className="modal-contents">
            {imageUrl ? (
              <div className="modal-img-contents">
                <img src={imageUrl} alt="Generated" style={{ aspectRatio }} />
              </div>
            ) : (
              <p>이미지를 불러오는 데 실패했습니다.</p>
            )}
            <div className="modal-footer">
              <div className="contents-text">
                <p>
                  이미지가 완성되었습니다.
                  <br />
                  버튼을 눌러 비율을 맞춰주세요
                </p>
                <AspectRatioSelector setAspectRatio={setAspectRatio} aspectRatio={aspectRatio} />
              </div>
              <div className="model-btn-wrapeer">
                <button className="modal-btn-skyblue" onClick={toggleModalSide}>
                  타이틀지정하기
                </button>
                <button className="modal-btn-blue" onClick={handleImgDownload}>
                  다운로드
                </button>
                <button className="modal-btn-white" onClick={() => closeModal('SendImageModal')}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </ModalContent>
      <CommentModalStyle openSideModal={openSideModal}>
        <div className="info-area">
          <div className="introduce">
            <p>제목과 정보를 입력해주세요</p>
            <p className="small">
              제목과 정보를 입력 후 업로드 될시 해당 정보는 서버에 올라갑니다.
            </p>
          </div>
          <div className="form">
            <label>제목</label>
            <input className="title-input" type="text" placeholder="제목을 입력해주세요" />
          </div>
          <div className="form">
            <label>내용</label>
            <textarea className="desciption-area" placeholder="내용을 입력해주세요" />
          </div>
        </div>
        <button className="upload-btn" onClick={handleImgUpload}>
          메인에 업로드
        </button>
      </CommentModalStyle>
    </ModalWrapper>
  );
};

export default SendImage;
