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
export const ModalContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyle = styled.div<{ openComment: boolean; deviceType: string }>`
  /* width: 45vw;
  height: calc(100vh - 50px);
  background-color: rgb(39, 39, 42);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; */

  width: ${(props) => (props.deviceType === 'mobile' ? '100vw' : '40vw')};
  flex-shrink: 0;
  height: ${(props) => (props.deviceType === 'mobile' ? '100vh' : 'calc(100vh - 50px)')};
  background-color: rgb(39, 39, 42);
  border-radius: ${({ openComment, deviceType }) =>
    deviceType === 'mobile' ? '0' : openComment ? '20px 0 0 20px' : '20px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 40px 30px;
  box-shadow: ${({ openComment, deviceType }) =>
    deviceType === 'mobile' ? 'none' : openComment ? '0' : '0 4px 10px rgba(0, 0, 0, 0.3)'};
  transition: 0.3s ease-in;
  transform: ${({ openComment }) => (openComment ? 'translate(-50%, 0%);' : 'translate(0%, 0%);')};
  z-index: 2;
  &.mobile-modal {
    border-radius: initial;
    transform: translate(0%, 0%);
  }
  .modal-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .button-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px;

      & > button {
        width: 140px;
        height: 36px;
        font-size: ${(props) => (props.deviceType === 'mobile' ? '12px' : '14px')};
      }

      .close-btn {
        background-color: var(--white-color);
        color: var(--black-color);
      }
    }
  }
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
    height: 65vh;
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

export const CommentModalStyle = styled.div<{ openComment: boolean; deviceType: string }>`
  width: ${(props) => (props.deviceType === 'mobile' ? '100vw' : '40vw')};
  flex-shrink: 0;
  height: ${(props) => (props.deviceType === 'mobile' ? '70vh' : 'calc(100vh - 50px)')};
  background-color: rgb(39, 39, 42);
  border-radius: ${({ openComment, deviceType }) =>
    deviceType === 'mobile' ? '0' : openComment ? '0 20px 20px 0' : '20px'};
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: absolute;
  padding: 40px 30px;
  box-shadow: ${({ deviceType }) =>
    deviceType === 'mobile' ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.3)'};
  transition: 0.3s ease-in;
  animation: ${FadeIn} 0.3s;
  transform: ${({ openComment }) => (openComment ? 'translate(50%, 0%);' : 'translate(0%, 0%);')};
  overflow: hidden;

  &.mobile-modal {
    border-radius: 15px 15px 0 0;
    transform: ${({ openComment }) =>
      openComment ? 'translate(0%, 0%);' : 'translate(0%, 100%);'} !important;
    bottom: 0;
    z-index: 3;
    padding: 50px 30px 0px;
  }
  .modal-close {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .comment-add {
    width: 100%;
    display: flex;
    gap: 10px;
    text-align: center;
    flex-direction: column;
    .user-info-add {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      width: 100%;
      .form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        label {
          color: var(--white-color);
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }
        input {
          box-sizing: border-box;
          position: relative;
          width: 100%;
          height: 30px;
          padding: 14px 18px;
          background: var(--white-color);
          border: 2px solid var(--skyblue-color);
          border-radius: 10px;
          resize: none;
          outline: none;
          transition: border 1s ease;
          &::placeholder {
            font-size: 14px;
          }
          &:focus {
            border: 2px solid var(--blue-color);
          }
        }
      }
    }
  }
  .textarea-add {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    textarea {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: ${(props) => (props.deviceType === 'mobile' ? '60px' : '100px')};
      padding: 14px 18px;
      background: var(--white-color);
      border: 2px solid var(--skyblue-color);
      border-radius: 14px;
      resize: none;
      outline: none;
      transition: border 1s ease;
      &::placeholder {
        font-size: 14px;
      }
      &:focus {
        border: 2px solid var(--blue-color);
      }
    }

    & > button {
      width: 120px;
      height: 100%;
      border-radius: 15px;
      font-size: ${(props) => (props.deviceType === 'mobile' ? '12px' : '14px')};
    }
  }

  .comment-list-wrapper {
    width: 100%;
    padding: 10px 0;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .comment-list {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      color: white;
      padding: 10px 0px;
      gap: 10px;
      .comment-user-info {
        width: 100%;
        display: flex;
        gap: 10px;
        justify-content: flex-start;
        align-items: center;
        .nickname {
          font-size: 16px;
          font-weight: 700;
        }
      }
      .comment-wrapper {
        display: flex;
        flex-direction: column;
      }
      .button-box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        > button {
          font-size: 14px;
          padding: 3px 6px;
          font-size: ${(props) => (props.deviceType === 'mobile' ? '12px' : '14px')};
        }
      }
    }
  }
`;
