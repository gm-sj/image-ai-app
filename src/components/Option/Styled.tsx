import styled from 'styled-components';

export const OptionStyld = styled.div`
  width: 100%;
  .option-wrapper {
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    gap: 10px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    gap: 20px;
    .select-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 5px 20px;
      gap: 5px;
      cursor: pointer;

      &.img-upload {
        border: 1px solid var(--gray-color);
        border-radius: 15px;
      }
      .item-select {
        width: 15px;
        height: 15px;
        background-color: var(--blue-color);
      }
      .upload-btn {
        position: absolute;
        label {
          position: absolute;
          inset: 0px 44px 0px 0px;
          overflow: hidden;
          opacity: 0;
          cursor: pointer;
        }
        input {
          display: none;
        }
      }
      .ratio-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 5px 20px;
        gap: 5px;
        outline: 1px solid var(--skyblue-color);
        border-radius: 15px;
        cursor: pointer;
        &.active {
          background-color: var(--gray-color);
          outline: 2px solid var(--blue-color);
        }
        span {
          width: 15px;
          height: 15px;
          background-color: var(--blue-color);
          cursor: pointer;
        }
      }
    }
  }
`;
