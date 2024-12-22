import styled from 'styled-components';

export const ModalStyle = styled.div`
  /* width: 45vw;
  height: calc(100vh - 50px);
  background-color: rgb(39, 39, 42);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; */

  width: 40vw;
  height: calc(100vh - 50px);
  background-color: rgb(39, 39, 42);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff4d4f;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .description {
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
  }
`;
