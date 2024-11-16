import React, { createContext, ReactNode, useState } from 'react';

interface Modal {
  id: string; // 고유한 식별자
  component: ReactNode; // 모달 컴포넌트
}

interface ModalProviderProps {
  children: ReactNode;
}

// 초기값을 빈 배열로 설정
export const ModalStateContext = createContext<Modal[]>([]);
export const ModalSetterContext = createContext<React.Dispatch<React.SetStateAction<Modal[]>>>(
  () => {}, // 기본값으로 빈 함수 설정
);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalList, setModalList] = useState<Modal[]>([]);

  return (
    <ModalStateContext.Provider value={modalList}>
      <ModalSetterContext.Provider value={setModalList}>{children}</ModalSetterContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
