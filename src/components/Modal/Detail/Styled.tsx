import styled from 'styled-components';
import { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalStyle = styled.div<{ openComment: boolean }>`
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
  border-radius: ${({ openComment }) => (openComment ? '20px 0 0 20px' : '20px')};
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 30px;
  box-shadow: ${({ openComment }) => (openComment ? '0' : '0 4px 10px rgba(0, 0, 0, 0.3)')};
  transition: 0.3s ease-in;
  right: ${({ openComment }) => (openComment ? '0' : '-25%')};
  z-index: 2;
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

export const CommentModalStyle = styled.div<{ openComment: boolean }>`
  width: 40vw;
  height: calc(100vh - 50px);
  background-color: rgb(39, 39, 42);
  border-radius: ${({ openComment }) => (openComment ? '0 20px 20px 0' : '20px')};
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease-in;
  animation: ${FadeIn} 0.3s;
  right: ${({ openComment }) => (openComment ? '0' : '25%')};
`;
