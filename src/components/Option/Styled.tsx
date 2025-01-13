import styled from 'styled-components';

export const OptionStyld = styled.div`
  width: 100%;
  .option-wrapper {
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
      font-weight: 700;
      cursor: pointer;

      &.img-upload {
        border: 1px solid var(--blue-color);
        background-color: var(--white-color);
        border-radius: 15px;
      }
    }
  }
`;
