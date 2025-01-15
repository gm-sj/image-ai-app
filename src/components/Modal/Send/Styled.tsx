import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: rgb(39, 39, 42);
  border-radius: 10px;
  padding: 20px;
  height: calc(100vh - 50px);
  max-width: 640px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
        max-height: 70vh;
        height: auto;
      }
    }
    .contents-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-top: 40px;
      color: var(--white-color);
      line-height: 1.3;
      p {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .model-btn-wrapeer {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      button {
        min-width: 10vw;
        max-width: 15vw;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        &.modal-btn-skyblue {
          background-color: var(--skyblue-color);
          color: var(--white-color);
        }
        &.modal-btn-blue {
          background-color: var(--blue-color);
          color: var(--white-color);
        }
        &.modal-btn-white {
          background-color: var(--white-color);
          color: var(--black-color);
          border: 1px solid var(--gray-color);
        }
      }
    }
  }
`;
