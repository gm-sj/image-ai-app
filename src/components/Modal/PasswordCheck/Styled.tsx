import styled from 'styled-components';

export const ModalContainerStyle = styled.div`
  /* width: 100%;
  height: 100%; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
  background-color: var(--white-color);
  padding: 20px;
  border-radius: 10px;
  width: 30vw;
  height: 30vh;
`;
