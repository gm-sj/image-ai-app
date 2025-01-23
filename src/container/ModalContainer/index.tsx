import React, { useContext, useEffect, useRef } from 'react';
import { ModalSetterContext, ModalStateContext } from '../../context/ModalProvider';
import { createPortal } from 'react-dom';
import { ModalContainerStyle } from './Styled';
import { useDeviceType } from '../../hooks/useDeviceType';

const ModalContainer = () => {
  const modalList = useContext(ModalStateContext);
  const setModalList = useContext(ModalSetterContext);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { deviceType } = useDeviceType();

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
    if (modalRef.current && modalList.length > 0 && !modalRef.current.classList.contains('open')) {
      modalRef.current.classList.add('close');
      setTimeout(() => {
        modalRef.current?.classList.add('open');
      }, 10);
    }
  }, [modalList.length]);

  // 모달 리스트가 비어 있으면 아무것도 렌더링하지 않음
  if (modalList.length === 0) {
    return null;
  }

  // 모달 컴포넌트를 포탈로 렌더링
  /* 모달 배경을 여기서 설정. */
  return createPortal(
    <ModalContainerStyle ref={modalRef} onClick={closeModalList} deviceType={deviceType}>
      {modalList.map((modal) => (
        <div
          className={modal?.isClosing ? 'closeIndividualModal' : ''}
          key={modal.id}
          onClick={closeModalList}
        >
          {modal.component}
        </div>
      ))}
    </ModalContainerStyle>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default ModalContainer;
