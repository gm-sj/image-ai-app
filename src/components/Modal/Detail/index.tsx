import React, { useState } from 'react';
import { ModalStyle } from './Styled';
import useModal from '../../../hooks/useModal';

interface DetailImageProps {
  open: boolean; // open은 boolean 타입
  onClose: () => void;
}

const DetailImage = () => {
  const { closeModal } = useModal();

  return (
    <ModalStyle>
      <section className="description-section">
        <p className="description">이미지 사진 설명입니다.</p>
        <div className="btn-group-wrapper">
          <button>댓글 등록하기</button>
          <button
            onClick={() => {
              closeModal('detailModal');
            }}
          >
            댓글 삭제하기
          </button>
        </div>
      </section>
      <section className="img-section">
        <img src="" alt="ai로 생성한 이미지 사진입니다." />
      </section>
    </ModalStyle>
  );
};

export default DetailImage;
