import styled from 'styled-components';

export const FooterStyle = styled.div`
  width: 100%;
  .footer-wrraper {
    margin-top: 30px;
    height: 100%;
    min-height: 150px;
    padding: 15px 20px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-contents {
      width: 100%;
      max-width: 1080px;
      color: var(--white-color);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .info-area {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        > p {
          &:not(:last-child)::after {
            content: '';
            position: relative;
            width: 1px;
            height: 12px;
            background-color: var(--white-color);
            margin: 0 10px;
            display: inline-block;
            top: 0;
            left: 0;
          }
        }
      }
      .link-area {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        > p {
          &:not(:last-child)::after {
            content: '';
            position: relative;
            width: 1px;
            height: 12px;
            background-color: var(--white-color);
            margin: 0 10px;
            display: inline-block;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
`;
