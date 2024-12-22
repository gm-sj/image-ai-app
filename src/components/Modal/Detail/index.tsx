import React, { useEffect, useState } from 'react';
import { CloseButton, ImageWrapper, ModalStyle } from './Styled';
import useModal from '../../../hooks/useModal';

interface ImageData {
  id: string;
  imageUrl: string;
  description: string;
}

const DetailImage = () => {
  const { closeModal } = useModal();
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  // 데이터 가져오기
  useEffect(() => {
    fetchData().catch((err) => console.error(err));
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!imageData) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <ModalStyle>
      {/* 닫기 버튼 */}
      <CloseButton onClick={() => closeModal('detailModal')}>✖</CloseButton>

      {/* 이미지와 설명 */}
      <ImageWrapper>
        <img src={imageData.imageUrl} alt={imageData.description} />
        <p className="description">{imageData.description}</p>
      </ImageWrapper>
    </ModalStyle>
  );
};

export default DetailImage;
