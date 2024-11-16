import React, { useContext } from 'react';
import { ModalStateContext } from '../../context/ModalProvider';
import { createPortal } from 'react-dom';

const ModalContainer = () => {
  const modalList = useContext(ModalStateContext);

  // 모달 리스트가 비어 있으면 아무것도 렌더링하지 않음
  if (modalList.length === 0) {
    return null;
  }

  // 모달 컴포넌트를 포탈로 렌더링
  return createPortal(
    <>{modalList.map((modal) => modal.component)}</>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default ModalContainer;
