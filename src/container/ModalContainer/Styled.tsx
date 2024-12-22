import styled from 'styled-components';

export const ModalContainerStyle = styled.div`
  position: fixed; /* 뷰포트를 기준으로 고정 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.close {
    opacity: 0;
  }

  &.open {
    opacity: 1;
  }

  .closeIndividualModal {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;
