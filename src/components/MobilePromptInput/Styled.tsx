import styled from 'styled-components';

export const PromptInputStyle = styled.div<{ deviceType: string; isVisible: boolean }>`
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 640px;
  width: 100%;
  background-color: rgba(182, 182, 182, 0.6);
  border-radius: 15px;
  transition: 0.8s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};

  .input-contents-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    textarea {
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
      &::placeholder {
        font-size: ${(props) => (props.deviceType === 'mobile' ? '12px' : '14px')};
      }
      &:focus {
        border: 2px solid var(--blue-color);
      }
    }
    button {
      position: relative;
      overflow: hidden;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 50px;
      margin: 0 auto;
      background: linear-gradient(to top, var(--skyblue-color) 0%, var(--blue-color) 100%);
      border-radius: 15px;
      color: #fff;
      font-size: 14px;
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
