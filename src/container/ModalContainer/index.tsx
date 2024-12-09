import React, { useContext, useEffect, useState } from 'react';
import { ModalSetterContext, ModalStateContext } from '../../context/ModalProvider';
import { createPortal } from 'react-dom';
import { ModalContainerStyle } from './Styled';

const ModalContainer = () => {
  const modalList = useContext(ModalStateContext);
  const setModalList = useContext(ModalSetterContext);
  const [isClose, setIsClose] = useState(false);

  const closeModalList = () => {
    setIsClose(true);

    setTimeout(() => {
      setIsClose(false);
      setModalList([]);
    }, 300);
  };

  useEffect(() => {
    if (modalList.length > 0) {
      setIsClose(true);
    }
  }, [modalList]);

  // 모달 리스트가 비어 있으면 아무것도 렌더링하지 않음
  if (modalList.length === 0) {
    return null;
  }

  // 모달 컴포넌트를 포탈로 렌더링
  /* 모달 배경을 여기서 설정. */
  return createPortal(
    <ModalContainerStyle className={isClose ? 'close' : 'open'} onClick={closeModalList}>
      {modalList.map((modal) => (
        <React.Fragment key={modal.id}>{modal.component}</React.Fragment>
      ))}
    </ModalContainerStyle>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default ModalContainer;
