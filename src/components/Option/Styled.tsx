import styled from 'styled-components';

export const OptionStyld = styled.div`
  width: 100%;
  .option-wrapper {
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    .select-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 5px 20px;
      gap: 5px;
      font-weight: 700;
      cursor: pointer;

      &.img-upload {
        border: none;
        background: linear-gradient(to top, var(--skyblue-color) 0%, var(--blue-color) 100%);
        transition: transform 0.5s ease;
        border-radius: 15px;
        color: var(--white-color);
        cursor: pointer;
        z-index: 1;
        overflow: hidden;
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
          transform-origin: top;
        }
        &:hover::before {
          transform: scaleY(0);
        }
      }
    }
  }
`;
