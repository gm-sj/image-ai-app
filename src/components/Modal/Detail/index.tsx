import React, { useEffect, useState } from 'react';
import { CloseButton, ImageWrapper, ModalStyle, CommentModalStyle } from './Styled';
import useModal from '../../../hooks/useModal';
import { Button } from '@mui/material';

interface ImageData {
  id: string;
  imageUrl: string;
  description: string;
}

const DetailImage = () => {
  // img
  const { closeModal } = useModal();
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openComment, setOpenComment] = useState<boolean>(false);
  // comment
  const [commentValue, setCommentValue] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('/dummy'); // MSW 핸들러로 GET 요청
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: ImageData = await response.json();
      setImageData(data);
    } catch (err: unknown) {
      // `unknown` 타입으로 처리 후 명시적으로 검사
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      console.error('Failed to fetch data:', errorMessage);
      setError('데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const openDescription = () => {
    setOpenComment(!openComment);
  };

  // 데이터 가져오기
  useEffect(() => {
    fetchData().catch((err) => console.error(err));
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!imageData) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <div style={{ display: 'flex' }}>
      <ModalStyle openComment={openComment}>
        <div className="modal-header">
          {/* 닫기 버튼 */}
          <CloseButton onClick={() => closeModal('detailModal')}>✖</CloseButton>
        </div>

        <div className="modal-body">
          {/* 이미지와 설명 */}
          <ImageWrapper>
            <img src={imageData.imageUrl} alt={imageData.description} />
            <p className="description">{imageData.description}</p>
          </ImageWrapper>
          <div className="button-box">
            <Button variant="contained" onClick={openDescription}>
              {openComment ? '닫기' : '상세보기'}
            </Button>
          </div>
        </div>
      </ModalStyle>
      <CommentModalStyle openComment={openComment}>
        <div className="comment-add">
          <textarea
            onChange={(e) => {
              setCommentValue(e.target.value);
            }}
          />
          <Button variant="contained">등록하기</Button>
        </div>
        <ul className="comment-list">
          <li>
            <p>댓글내용</p>
            <div className="button-box">
              <Button variant="contained">수정하기</Button>
              <Button color="error" variant="outlined">
                삭제하기
              </Button>
            </div>
          </li>
          <li>
            <p>댓글내용</p>
            <div className="button-box">
              <Button variant="contained">수정하기</Button>
              <Button color="error" variant="outlined">
                삭제하기
              </Button>
            </div>
          </li>
          <li>
            <p>댓글내용</p>
            <div className="button-box">
              <Button variant="contained">수정하기</Button>
              <Button color="error" variant="outlined">
                삭제하기
              </Button>
            </div>
          </li>
        </ul>
      </CommentModalStyle>
    </div>
  );
};

export default DetailImage;
