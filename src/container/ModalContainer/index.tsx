import React, { useContext, useEffect, useRef } from 'react';
import { ModalSetterContext, ModalStateContext } from '../../context/ModalProvider';
import { createPortal } from 'react-dom';
import { ModalContainerStyle } from './Styled';

const ModalContainer = () => {
  const modalList = useContext(ModalStateContext);
  const setModalList = useContext(ModalSetterContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModalList = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && modalRef.current) {
      modalRef.current.classList.remove('open');
      modalRef.current.classList.add('close'); // 애니메이션 클래스 추가
      setTimeout(() => {
        setModalList([]);
      }, 300); // 애니메이션 지속 시간에 맞춰 모달 제거
    }
  };

  useEffect(() => {
    if (modalRef.current && modalList.length > 0) {
      setTimeout(() => {
        modalRef.current?.classList.add('open');
      }, 10);
    }
  }, [modalList]);

  // 모달 리스트가 비어 있으면 아무것도 렌더링하지 않음
  if (modalList.length === 0) {
    return null;
  }

  // 모달 컴포넌트를 포탈로 렌더링
  /* 모달 배경을 여기서 설정. */
  return createPortal(
    <ModalContainerStyle ref={modalRef} onClick={closeModalList}>
      {modalList.map((modal) => (
        <React.Fragment key={modal.id}>{modal.component}</React.Fragment>
      ))}
    </ModalContainerStyle>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default ModalContainer;
