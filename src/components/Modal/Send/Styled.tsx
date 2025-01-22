import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalContent = styled.div<{
  openSideModal: boolean;
  deviceType: string;
}>`
  background-color: rgb(39, 39, 42);
  border-radius: 20px;
  padding: 40px 30px;
  height: ${(props) => (props.deviceType === 'mobile' ? '100vh' : 'calc(100vh - 50px)')};
  max-width: ${(props) => (props.deviceType === 'mobile' ? 'initial' : '640px')};
  width: ${(props) => (props.deviceType === 'mobile' ? '100%' : '40vw')};
  box-shadow: ${({ openSideModal }) => (openSideModal ? '0' : '0 4px 10px rgba(0, 0, 0, 0.3)')};
  border-radius: ${({ openSideModal }) => (openSideModal ? '20px 0 0 20px' : '20px')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in;
  z-index: 2;
  transform: ${({ openSideModal }) =>
    openSideModal ? 'translate(-50%, 0%);' : 'translate(0%, 0%);'};

  &.mobile-modal {
    border-radius: initial;
    transform: translate(0%, 0%);
  }

  position: absolute;
  .modal-contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .modal-img-contents {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 60vh;
        height: auto;
      }
    }
    .modal-footer {
      margin-top: 20px;
      .contents-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: var(--white-color);
        line-height: 1.3;
        p {
          font-size: 16px;
          font-weight: 700;
        }
      }
      .model-btn-wrapeer {
        display: flex;
        gap: 20px;
        padding: 20px;
        justify-content: center;

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
  }
`;

export const CommentModalStyle = styled.div<{
  openSideModal: boolean;
  deviceType: string;
}>`
  flex-shrink: 0;
  height: ${(props) => (props.deviceType === 'mobile' ? '70vh' : 'calc(100vh - 50px)')};
  max-width: ${(props) => (props.deviceType === 'mobile' ? 'initial' : '640px')};
  width: ${(props) => (props.deviceType === 'mobile' ? '100vw' : '40vw')};
  background-color: rgb(39, 39, 42);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ openSideModal }) => (openSideModal ? '0 20px 20px 0' : '20px')};
  align-items: center;
  padding: 40px 30px;
  box-shadow: ${({ openSideModal }) => (openSideModal ? '0' : '0 4px 10px rgba(0, 0, 0, 0.3)')};
  transition: 0.3s ease-in;
  position: absolute;
  transform: ${({ openSideModal }) =>
    openSideModal ? 'translate(50%, 0%);' : 'translate(0%, 0%);'};
  &.mobile-modal {
    border-radius: 15px 15px 0 0;
    transform: ${({ openSideModal }) =>
      openSideModal ? 'translate(0%, 0%);' : 'translate(0%, 100%);'} !important;
    bottom: 0;
    z-index: 3;
  }

  .introduce {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--white-color);
    p {
      font-size: 21px;
      font-weight: 700;
    }
    .small {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .info-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      label {
        font-size: 14px;
        color: var(--white-color);
        font-weight: bold;
      }
      .title-input {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 50px;
        padding: 14px 18px;
        background: var(--white-color);
        border: 2px solid var(--skyblue-color);
        border-radius: 15px;
        resize: none;
        outline: none;
        transition: border 1s ease;
        font-size: 16px;
        &::placeholder {
          font-size: 14px;
        }
        &:focus {
          border: 2px solid var(--blue-color);
        }
      }
      .description-area {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: ${(props) => (props.deviceType === 'mobile' ? '15vh' : '50vh')};
        padding: 14px 18px;
        background: var(--white-color);
        border: 2px solid var(--skyblue-color);
        border-radius: 15px;
        resize: none;
        outline: none;
        transition: border 1s ease;
        font-size: 16px;
        &::placeholder {
          font-size: 14px;
        }
        &:focus {
          border: 2px solid var(--blue-color);
        }
      }
    }
  }
  .btn-area {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.deviceType === 'mobile' ? 'row' : 'column')};
    gap: 20px;
    .back-btn {
      position: relative;
      overflow: hidden;
      border: none;
      width: 100%;
      height: 60px;
      background: linear-gradient(to top, var(--white-color) 0%, var(--gray-color) 100%);
      border-radius: 15px;
      color: var(--black-color);
      font-size: 18px;
      cursor: pointer;
      z-index: 1;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, var(--white-color) 100%, var(--gray-color) 0%);
        transition: transform 0.5s ease;
        border-radius: 15px;
        z-index: -1;
        transform: scaleY(1);
        transform-origin: bottom;
      }

      &:hover::before {
        transform: scaleY(0);
      }
    }
    .upload-btn {
      position: relative;
      overflow: hidden;
      border: none;
      width: 100%;
      height: 60px;
      background: linear-gradient(to top, var(--skyblue-color) 0%, var(--blue-color) 100%);
      border-radius: 15px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, var(--skyblue-color) 100%, var(--blue-color) 0%);
        transition: transform 0.5s ease;
        border-radius: 15px;
        z-index: -1;
        transform: scaleY(1);
        transform-origin: bottom;
      }

      &:hover::before {
        transform: scaleY(0);
      }
    }
  }
`;
